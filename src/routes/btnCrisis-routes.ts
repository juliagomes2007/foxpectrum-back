import { Router } from 'express';
import BtnCrisisController from '../controllers/btn-crisis.controller';

export class BtnCrisisRoutes {
  router = Router();
  btnCrisisController = new BtnCrisisController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.route('/').post(this.btnCrisisController.save);
    this.router.route('/').get(this.btnCrisisController.getAll);
    this.router.route('/:id').put(this.btnCrisisController.updateBtnCrisis);
    this.router.route("/:id").delete(this.btnCrisisController.deleteById);
  }
}
export default new BtnCrisisRoutes().router;