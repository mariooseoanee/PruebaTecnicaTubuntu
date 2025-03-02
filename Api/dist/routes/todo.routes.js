"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = require("../controllers/todo.controller"); // Ajusta la ruta si es necesario
const router = (0, express_1.Router)();
router.get("/todos", todo_controller_1.getTodos);
router.post("/todos", todo_controller_1.createTodo);
exports.default = router;
//# sourceMappingURL=todo.routes.js.map