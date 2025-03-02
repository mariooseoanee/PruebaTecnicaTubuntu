import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";

// url, pero con api en vez de localhost, por el nombre del servicio en el docker-compose
const API_URL = "http://localhost:3000/api/tareas"; 

interface Tarea {
  id: number;
  task: string;
}

// he ido utilizando los prints por consola para poder debugear 

export default function TareasScreen() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [task, setTexto] = useState("");

  useEffect(() => {
    fetchTareas();
  }, []);

  // obtener tareas de la API (con FETCH)
  const fetchTareas = async () => {
    try {
      console.log("Obteniendo tareas...");
      const response = await fetch(API_URL);
      const data: Tarea[] = await response.json();

      console.log("Tareas obtenidas:", data);
      setTareas(data);
    } catch (error) {
      console.error("Error obteniendo tareas:", error);
    }
  };

  // agregar tarea en la API (con GET)
  const agregarTarea = async () => {
    if (task.trim() === "") return; // para no poder enviar un campo vacío
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: task.trim() }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en la respuesta de la API:", errorData);
        return;
      }
  
      fetchTareas(); // actualiza lista de tareas despues de agregar
      setTexto(""); // limpiar el input
    } catch (error) {
      console.error("Error añadiendo tarea:", error);
    }
  };
  

  // eliminar la tarea de la API (con DELETE) segun su id
  const eliminarTarea = async (id: number) => {
    try {
      console.log("Eliminando tarea con ID:", id);
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchTareas();
    } catch (error) {
      console.error("Error eliminando tarea:", error);
    }
  };

  // modificar la tarea de la API (con PUT) segun su id
  const modificarTarea = async (id: number , nuevoTexto: String) => {
    try {
      const respuesta = await fetch(`${API_URL}/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task: nuevoTexto }), // le pasas a la peticion el nuevo texto (en JSON)
        });

        if (!respuesta.ok) {
            throw new Error('Error al actualizar la tarea');
        }

        console.log('Tarea modificada correctamente');
        fetchTareas(); // refrescar la lista
    } catch (error) {
        console.error('Error modificando la tarea:', error);
    }
};


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📋 Lista de Tareas</Text>
      <TextInput
        style={styles.input}
        placeholder="Añadir tarea"
        value={task}
        onChangeText={setTexto}
      />
      <Button title="Agregar" onPress={agregarTarea} />
      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.tareaContainer}>
            <TextInput
              style={styles.tareaTexto}
              value={item.task}
              onChangeText={(nuevoTexto) => modificarTarea(item.id, nuevoTexto)}
            />
            <TouchableOpacity onPress={() => eliminarTarea(item.id)}>
              <Text style={styles.eliminar}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "40%",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  tareaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  tareaTexto: {
    flex: 1,
    marginRight: 10,
    fontSize: 18,
  },
  eliminar: {
    color: "red",
    fontSize: 20,
  },
});
