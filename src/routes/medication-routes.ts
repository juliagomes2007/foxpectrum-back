import { Router } from 'express';
import MedicationController from '../controllers/medication.controller';

export class MedicationRoutes {
  router = Router();
  medicationController = new MedicationController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.route('/').post(this.medicationController.save);
    this.router.route('/').get(this.medicationController.getAll);
    this.router.route('/:id').put(this.medicationController.updateMedication);
    this.router.route("/:id").delete(this.medicationController.deleteById);
  }
}
export default new MedicationRoutes().router;