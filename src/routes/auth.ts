import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

class AuthRoutes {
  router = Router();
  authController = new AuthController();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route('/save').post(this.authController.save);
    this.router.route('/').get(this.authController.getAll);
    this.router.route('/:id').put(this.authController.updateRegister);
    this.router.route("/:id").delete(this.authController.deleteById);
  }
}
export default new AuthRoutes().router;