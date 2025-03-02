# PruebaTecnicaTubuntu - Mario Seoane

---

## Contexto

Esta prueba técnica fue inesperada, ya que no coincide mucho con lo visto durante mi grado. Aunque he trabajado con APIs REST en Java usando Spring Boot, el uso de TypeScript y React Native, junto con el entorno web, fue algo totalmente nuevo para mí. He aprendido mucho a medida que avanzaba (en el finde semana), especialmente en lo que respecta a la gestión de dependencias y compatibilidades entre Expo y las versiones de React.

---

## Estructura del Repositorio

El repositorio está dividido en dos carpetas principales:

1. **API**: Contiene el código de la API desarrollada en TypeScript.
2. **Frontend**: Contiene el código del frontend desarrollado en React Native con Expo.

---

## Docker

Tuve el proyecto en DOcker, pero debido a un error de dependencias que no pude resolver (y con poco tiempo por los exámenes y proyectos del grado), el frontend no cargaba correctamente y solo funcionaba por terminal. Por esta razón, he decidido entregar el proyecto sin Dockerizar.

---

## BBDD
Debido a la falta de tiempo, la aplicación no utiliza una base de datos. En su lugar, la información se almacena en un array en memoria. Esto significa que cada vez que se reinicia la API, el array se vacía y se pierden todas las tareas almacenadas. Esta solución temporal fue implementada para cumplir con los plazos de entrega, pero en un entorno de producción se recomienda utilizar una base de datos para persistir la información.

---

## Uso

Clonarse el repositorio y dentro de cada una de las carpetas (API y FRONT) hay que reinstalar las dependencias (con npm install --legacy-peer-deps) y arrancar la api con el comando "npx ts-node src/index.ts" y arrancar expo con "npm start", abriendo el navegador.

Una vez ya ahi, es un CRUD sencillo, escribiendo la tarea en el input grande y pulsando el boton para añadirla. Debajo de este boton, se verán todas las tareas que existen en memoria, para editarlas unicamente se hace click en ellas y es otro input que va guardando lo que escribes. Por último para la elikminación se pulsa la cruz roja de la derecha de la tarjeta.

Para probar la api sola, desde tu navegador o Postman con la url: http://localhost:3000/api/tareas


