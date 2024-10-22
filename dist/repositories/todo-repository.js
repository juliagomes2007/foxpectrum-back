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
exports.TodoRepository = void 0;
const mongoose_1 = require("mongoose");
const ITodo_1 = require("../models/todo/ITodo");
class TodoRepository {
    constructor() {
        var _a;
        this.dbname = (_a = process.env.DB_NAME) !== null && _a !== void 0 ? _a : 'foxpectrum';
    }
    save(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const Todo = (0, mongoose_1.model)('Todo', ITodo_1.todoSchema);
            const todoData = new Todo(Object.assign({}, todo));
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return !!(yield todoData.save()).id;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const Todo = (0, mongoose_1.model)('Todo', ITodo_1.todoSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Todo.find({});
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
            return [];
        });
    }
    getByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            const Todo = (0, mongoose_1.model)('Todo', ITodo_1.todoSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Todo.find({ check: status });
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
            return [];
        });
    }
    getByDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            const Todo = (0, mongoose_1.model)('Todo', ITodo_1.todoSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Todo.find({ date: date });
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
            return [];
        });
    }
    update(_id, todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const Todo = (0, mongoose_1.model)('Todo', ITodo_1.todoSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Todo.updateOne({ _id }, Object.assign({}, todo)); //== {task: todo.task, check: todo.check}
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
            return Todo;
        });
    }
    deleteById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const Todo = (0, mongoose_1.model)('Todo', ITodo_1.todoSchema);
            try {
                yield (0, mongoose_1.connect)(`mongodb://localhost:27017/${this.dbname}`);
                return yield Todo.deleteOne({ _id });
            }
            catch (error) {
                console.log(error);
            }
            finally {
                (0, mongoose_1.disconnect)();
            }
        });
    }
}
exports.TodoRepository = TodoRepository;
//# sourceMappingURL=todo-repository.js.map