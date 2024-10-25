import { Router } from 'express';
import EventController from '../controllers/event.controller';

export class EventRoutes {
  router = Router();
  eventController = new EventController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.route('/').post(this.eventController.save);
    this.router.route('/:date').get(this.eventController.getByDate);
    this.router.route('/:id').put(this.eventController.updateEvent);
    this.router.route("/:id").delete(this.eventController.deleteById);
  }
}
export default new EventRoutes().router;