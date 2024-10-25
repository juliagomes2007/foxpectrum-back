import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../repositories/user-repository';
import { IUser } from '../models/user/IUser';

export default class UserController {
  constructor() { }

  async save(req: Request, res: Response, next: NextFunction) {
    const userRepo = new UserRepository();

    try {
        const id = await userRepo.save(req.body as IUser)

        return res.json({id});
      } catch (error) {
      }
    console.log('teste')
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const userRepo = new UserRepository();

      const userList =  await userRepo.getAll();
      return res.json(userList);
    } catch (error) {
      return res.json({error: error});
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userRepo = new UserRepository();
      const user =  await userRepo.update(req.params.id as string, req.body as IUser);
      return res.json(user);
    } catch (err) { 
      return res.json({error: err});
    }
  }

  async deleteById(req: Request, res: Response, next: NextFunction){
    try {
      const userRepo = new UserRepository();
      const user = await userRepo.deleteById(req.params.id as string);
      return res.json(user);
    } catch (err) {
      return res.json({error: err});
    }
  }
}