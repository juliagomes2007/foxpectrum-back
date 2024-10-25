import { Request, Response, NextFunction } from 'express';
import { RegisterRepository } from '../repositories/register-repository';
import { IRegister } from '../models/register/IRegister';

export default class AuthController {
  constructor() { }

  async save(req: Request, res: Response, next: NextFunction) {
    const registerRepo = new RegisterRepository();

    try {
        const id = await registerRepo.save(req.body as IRegister)

        return res.json({id});
      } catch (error) {
      }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const registerRepo = new RegisterRepository();

      const registerList =  await registerRepo.getAll();
      return res.json(registerList);
    } catch (error) {
      return res.json({error: error});
    }
  }

  async updateRegister(req: Request, res: Response, next: NextFunction) {
    try {
      const registerRepo = new RegisterRepository();
      const register =  await registerRepo.update(req.params.id as string, req.body as IRegister);
      return res.json(register);
    } catch (err) { 
      return res.json({error: err});
    }
  }

  async deleteById(req: Request, res: Response, next: NextFunction){
    try {
      const registerRepo = new RegisterRepository();
      const register = await registerRepo.deleteById(req.params.id as string);
      return res.json(register);
    } catch (err) {
      return res.json({error: err});
    }
  }
}