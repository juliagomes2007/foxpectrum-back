import { Router } from 'express';
import MoodTrackerController from '../controllers/mood-tracker.controller';


export class MoodTrackerRoutes {
  router = Router();
  moodTrackerController = new MoodTrackerController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.route('/').post(this.moodTrackerController.save);
    this.router.route('/').get(this.moodTrackerController.getAll);
    this.router.route('/:id').get(this.moodTrackerController.getById);
    this.router.route('/:id').put(this.moodTrackerController.updateMoodTracker);
    this.router.route("/:id").delete(this.moodTrackerController.deleteById);
  }
}
export default new MoodTrackerRoutes().router;
