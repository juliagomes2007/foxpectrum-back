import { Request, Response, NextFunction } from 'express';
import { BtnCrisisRepository } from '../repositories/btnCrisis-repository';
import { IBtnCrisis } from '../models/btnCrisis/IBtnCrisis';

export default class BtnCrisisController {
  constructor() { }

  async save(req: Request, res: Response, next: NextFunction) {
    const btnCrisisRepo = new BtnCrisisRepository();

    try {
        const success = await btnCrisisRepo.save(req.body as IBtnCrisis)

        return res.json({success});
      } catch (error) {
        console.log({error: error});
      }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const btnCrisisRepo = new BtnCrisisRepository();

      const btnCrisisList =  await btnCrisisRepo.getAll();
      return res.json(btnCrisisList);
    } catch (error) {
      return res.json({error: error});
    }
  }

  async updateBtnCrisis(req: Request, res: Response, next: NextFunction) {
    try {
      const btnCrisisRepo = new BtnCrisisRepository();
      const btnCrisis =  await btnCrisisRepo.update(req.params.id as string, req.body as IBtnCrisis);
      return res.json(btnCrisis);
    } catch (err) { 
      return res.json({error: err});
    }
  }

  async deleteById(req: Request, res: Response, next: NextFunction){
    try {
      const btnCrisisRepo = new BtnCrisisRepository();
      const btnCrisis = await btnCrisisRepo.deleteById(req.params.id as string);
      return res.json(btnCrisis);
    } catch (err) {
      return res.json({error: err});
    }
  }
}