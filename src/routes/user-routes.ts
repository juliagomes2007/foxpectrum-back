import { Router } from 'express';
import UserController from '../controllers/user.controller';

class UserRoutes {
  router = Router();
  userController = new UserController();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route('/save').post(this.userController.save);
    this.router.route('/').get(this.userController.getAll);
    this.router.route('/:id').put(this.userController.updateUser);
    this.router.route("/:id").delete(this.userController.deleteById);
  }
}
export default new UserRoutes().router;