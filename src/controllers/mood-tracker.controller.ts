import { Request, Response, NextFunction } from 'express';
import { MoodTrackerRepository } from '../repositories/moodTracker-repository';
import { IMoodTracker } from '../models/moodTracker/IMoodTracker';

export default class MoodTrackerController {
  constructor() { }

  async save(req: Request, res: Response, next: NextFunction) {
    const moodTrackerRepo = new MoodTrackerRepository();
    console.log(req.body)
    try {
        const id = await moodTrackerRepo.save(req.body as IMoodTracker)

        return res.json({success: id});
      } catch (error) {
        console.log(error);
      }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const moodTrackerRepo = new MoodTrackerRepository();

      const moodTrackerList =  await moodTrackerRepo.getAll();
      return res.json(moodTrackerList);
    } catch (error) {
      return res.json({error: error});
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const moodTrackerRepo = new MoodTrackerRepository();
      const moodTrackerList =  await moodTrackerRepo.getById(req.params.status as unknown as string); // pega status da url
      return res.json(moodTrackerList);
    } catch (err) { 
      return res.json({error: err});
    }
  }

  async updateMoodTracker(req: Request, res: Response, next: NextFunction) {
    try {
      const moodTrackerRepo = new MoodTrackerRepository();
      const moodTracker =  await moodTrackerRepo.update(req.params.id as string, req.body as IMoodTracker);
      return res.json(moodTracker);
    } catch (err) { 
      return res.json({error: err});
    }
  }

  async deleteById(req: Request, res: Response, next: NextFunction){
    try {
      const moodTrackerRepo = new MoodTrackerRepository();
      const moodTracker = await moodTrackerRepo.deleteById(req.params.id as string);
      return res.json(moodTracker);
    } catch (err) {
      return res.json({error: err});
    }
  }
}
