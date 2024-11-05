"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRoutes = void 0;
var express_1 = require("express");
var todo_controller_1 = require("../controllers/todo.controller");
var TodoRoutes = /** @class */ (function () {
    function TodoRoutes() {
        this.router = (0, express_1.Router)();
        this.todoController = new todo_controller_1.default();
        this.intializeRoutes();
    }
    TodoRoutes.prototype.intializeRoutes = function () {
        this.router.route('/').post(this.todoController.save);
        this.router.route('/').get(this.todoController.getAll);
        this.router.route('/:status').get(this.todoController.getByStatus);
        this.router.route('/:date').get(this.todoController.getByDate);
        this.router.route('/:id').put(this.todoController.updateTodo);
        this.router.route("/:id").delete(this.todoController.deleteById);
    };
    return TodoRoutes;
}());
exports.TodoRoutes = TodoRoutes;
exports.default = new TodoRoutes().router;
