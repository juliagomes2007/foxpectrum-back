import { Application } from 'express';
import AuthRoutes from './auth';
import UserRoutes from './user-routes';
import TodoRoutes from './todo-routes';
import MoodTrackerRoutes from './moodTracker-routes';
import MedicationRoutes from './medication-routes';
import BtnCrisisRoutes from './btnCrisis-routes';

export default class Routes {

  constructor(app: Application) {
    app.use('/api/auth', AuthRoutes);
    app.use('/api/user', UserRoutes);
    app.use('/api/todo', TodoRoutes);
    app.use('/api/mood-tracker', MoodTrackerRoutes);
    app.use('/api/medication', MedicationRoutes);
    app.use('/api/btn-crisis', BtnCrisisRoutes);
  }
}