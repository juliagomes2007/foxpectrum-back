"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_repository_1 = require("../repositories/todo-repository");
// import CourseRepo from './../repositories/CoursesRepo';
// import { apiErrorHandler } from './../handlers/errorHandler';
class TodoController {
    constructor() { }
    save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const todoRepo = new todo_repository_1.TodoRepository();
            try {
                const success = yield todoRepo.save(req.body);
                return res.json({ success });
            }
            catch (error) {
                // apiErrorHandler(error, req, res, 'Fetch All Courses failed.');
            }
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoRepo = new todo_repository_1.TodoRepository();
                const todoList = yield todoRepo.getAll();
                return res.json(todoList);
            }
            catch (error) {
                return res.json({ error: error });
            }
        });
    }
    getByStatus(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoRepo = new todo_repository_1.TodoRepository();
                const todoList = yield todoRepo.getByStatus(req.params.status); // pega status da url
                return res.json(todoList);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
    getByDate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoRepo = new todo_repository_1.TodoRepository();
                const todoList = yield todoRepo.getByDate(req.params.date); // pega status da url
                return res.json(todoList);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
    updateTodo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoRepo = new todo_repository_1.TodoRepository();
                const todo = yield todoRepo.update(req.params.id, req.body);
                return res.json(todo);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
    deleteById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoRepo = new todo_repository_1.TodoRepository();
                const todo = yield todoRepo.deleteById(req.params.id);
                return res.json(todo);
            }
            catch (err) {
                return res.json({ error: err });
            }
        });
    }
}
exports.default = TodoController;
//# sourceMappingURL=todo.controller.js.map