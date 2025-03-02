"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tarea_controller_1 = require("../controllers/tarea.controller");
const router = (0, express_1.Router)();
router.get("/tareas", tarea_controller_1.getTareas);
router.post("/tareas", tarea_controller_1.createTarea);
router.put("/tareas/:id", tarea_controller_1.updateTarea);
router.delete("/tareas/:id", tarea_controller_1.deleteTarea);
exports.default = router;
//# sourceMappingURL=tarea.routes.js.map