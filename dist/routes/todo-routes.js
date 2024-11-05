"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRoutes = void 0;
const express_1 = require("express");
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
class TodoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.todoController = new todo_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/').post(this.todoController.save);
        this.router.route('/').get(this.todoController.getAll);
        this.router.route('/:status').get(this.todoController.getByStatus);
        this.router.route('/:date').get(this.todoController.getByDate);
        this.router.route('/:id').put(this.todoController.updateTodo);
        this.router.route("/:id").delete(this.todoController.deleteById);
    }
}
exports.TodoRoutes = TodoRoutes;
exports.default = new TodoRoutes().router;
//# sourceMappingURL=todo-routes.js.map