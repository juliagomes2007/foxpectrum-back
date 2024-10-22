import { Application } from 'express';
import AuthRoutes from './auth';
import TodoRoutes from './todo-routes';
import MoodTrackerRoutes from './moodTracker-routes';

export default class Routes {

  constructor(app: Application) {
    app.use('/api/auth', AuthRoutes);
    app.use('/api/todo', TodoRoutes);
    app.use('/api/mood-tracker', MoodTrackerRoutes);
  }
}