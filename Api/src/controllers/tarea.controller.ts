import { Request, Response } from "express";
import { Tarea } from "../models/tarea.model";

let tareas: Tarea[] = [];

// get de todas las tareas
export const getTareas = async (req: Request, res: Response) => {
  res.json(tareas);
};


// creacion de una nueva tarea
export const createTarea = async (req: Request, res: Response) => {
  const { task } = req.body;
  if (!task) {
    res.status(400).json({ error: "El campo 'task' es obligatorio" });
    return;
  }

  const newTarea: Tarea = { id: Date.now(), task };
  tareas.push(newTarea);

  res.status(201).json(newTarea);
};

// actualizar una tarea
export const updateTarea = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { task } = req.body;

  const tareaIndex = tareas.findIndex(t => t.id === parseInt(id));
  if (tareaIndex === -1) {
    res.status(404).json({ error: "Tarea no encontrada" });
    return;
  }

  tareas[tareaIndex].task = task;
  res.json(tareas[tareaIndex]);
};

// borrar una tarea
export const deleteTarea = async (req: Request, res: Response) => {
  const { id } = req.params;
  const tareaIndex = tareas.findIndex(t => t.id === parseInt(id));

  if (tareaIndex === -1) {
    res.status(404).json({ error: "Tarea no encontrada" });
    return;
  }

  const tareaEliminada = tareas.splice(tareaIndex, 1);
  res.json({ mensaje: "Tarea eliminada", tarea: tareaEliminada[0] });
};
