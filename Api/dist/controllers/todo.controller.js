"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = exports.getTodos = void 0;
const getTodos = (req, res) => {
    return res.json({ message: "Lista de todos" });
};
exports.getTodos = getTodos;
const createTodo = (req, res) => {
    return res.json({ message: "Todo creado" });
};
exports.createTodo = createTodo;
//# sourceMappingURL=todo.controller.js.map