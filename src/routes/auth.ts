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
  }
}
export default new AuthRoutes().router;