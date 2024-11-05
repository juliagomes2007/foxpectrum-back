import { Application, Router } from 'express';
import AuthRoutes from './src/routes/auth';
import UserRoutes from './src/routes/user-routes';
import TodoRoutes from './src/routes/todo-routes';
import MoodTrackerRoutes from './src/routes/moodTracker-routes';
import MedicationRoutes from './src/routes/medication-routes';
import BtnCrisisRoutes from './src/routes/btnCrisis-routes';

class Routes {
  static define(router: Router){
    router.use('/api/auth', AuthRoutes);
    router.use('/api/user', UserRoutes);
    router.use('/api/todo', TodoRoutes);
    router.use('/api/mood-tracker', MoodTrackerRoutes);
    router.use('/api/medication', MedicationRoutes);
    router.use('/api/btn-crisis', BtnCrisisRoutes);
    
    return router
  }
}

export default Routes.define(Router());
