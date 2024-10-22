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
    // this.router.route('/:id').get(this.authController.getCourseDetails);
  }
}
export default new TodoRoutes().router;


// api/v1/auth/save
// api/v1/todo/save