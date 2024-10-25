import { Request, Response, NextFunction } from 'express';
import { EventRepository } from '../repositories/event-repository';
import { IEvent } from '../models/event/IEvent';

export default class EventController {
  constructor() { }

  async save(req: Request, res: Response, next: NextFunction) {
    const eventRepo = new EventRepository();

    try {
        const success = await eventRepo.save(req.body as IEvent)

        return res.json({success});
      } catch (error) {
        console.log({error: error});
      }
  }

  async getByDate(req: Request, res: Response, next: NextFunction) {
    try {
      const eventRepo = new EventRepository();
      const eventList =  await eventRepo.getByDate(req.params.date as unknown as string); // pega status da url
      return res.json(eventList);
    } catch (err) { 
      return res.json({error: err});
    }
  }

  async updateEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const eventRepo = new EventRepository();
      const event =  await eventRepo.update(req.params.id as string, req.body as IEvent);
      return res.json(event);
    } catch (err) { 
      return res.json({error: err});
    }
  }

  async deleteById(req: Request, res: Response, next: NextFunction){
    try {
      const eventRepo = new EventRepository();
      const event = await eventRepo.deleteById(req.params.id as string);
      return res.json(event);
    } catch (err) {
      return res.json({error: err});
    }
  }
}