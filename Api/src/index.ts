import express from "express";
import cors from "cors";
import tareaRoutes from "./routes/tarea.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", tareaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/api/tareas`);
});
