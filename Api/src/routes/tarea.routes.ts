import { Router } from "express";
import { getTareas, createTarea, updateTarea, deleteTarea } from "../controllers/tarea.controller";

const router = Router();

router.get("/tareas", getTareas);
router.post("/tareas", createTarea);
router.put("/tareas/:id", updateTarea);
router.delete("/tareas/:id", deleteTarea);

export default router;