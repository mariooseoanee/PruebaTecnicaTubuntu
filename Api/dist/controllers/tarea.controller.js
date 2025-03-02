"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTarea = exports.updateTarea = exports.createTarea = exports.getTareas = void 0;
let tareas = [];
// get de todas las tareas
const getTareas = async (req, res) => {
    res.json(tareas);
};
exports.getTareas = getTareas;
// creacion de una nueva tarea
const createTarea = async (req, res) => {
    const { task } = req.body;
    if (!task) {
        res.status(400).json({ error: "El campo 'task' es obligatorio" });
        return;
    }
    const newTarea = { id: Date.now(), task };
    tareas.push(newTarea);
    res.status(201).json(newTarea);
};
exports.createTarea = createTarea;
// actualizar una tarea
const updateTarea = async (req, res) => {
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
exports.updateTarea = updateTarea;
// borrar una tarea
const deleteTarea = async (req, res) => {
    const { id } = req.params;
    const tareaIndex = tareas.findIndex(t => t.id === parseInt(id));
    if (tareaIndex === -1) {
        res.status(404).json({ error: "Tarea no encontrada" });
        return;
    }
    const tareaEliminada = tareas.splice(tareaIndex, 1);
    res.json({ mensaje: "Tarea eliminada", tarea: tareaEliminada[0] });
};
exports.deleteTarea = deleteTarea;
//# sourceMappingURL=tarea.controller.js.map