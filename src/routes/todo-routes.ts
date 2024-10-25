import { Router } from 'express';
import TodoController from '../controllers/todo.controller';

export class TodoRoutes {
  router = Router();
  todoController = new TodoController();

  constructor() {
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
export default new TodoRoutes().router;