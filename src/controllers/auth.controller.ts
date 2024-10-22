import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../repositories/user-repository';
import { IUser } from '../models/user/IUser';
// import CourseRepo from './../repositories/CoursesRepo';
// import { apiErrorHandler } from './../handlers/errorHandler';

export default class AuthController {
  constructor() { }

  async save(req: Request, res: Response, next: NextFunction) {
    const userRepo = new UserRepository();

    try {
        const id = await userRepo.save(req.body as IUser)

        return res.json({id});
      } catch (error) {
        // apiErrorHandler(error, req, res, 'Fetch All Courses failed.');
      }
    console.log('teste')
  }

//   async getCourseDetails(req: Request, res: Response, next: NextFunction) {
//     try {
//       const courseDetails = await CourseRepo.getById(req.params.id);
//       if (courseDetails) {
//         return res.json(courseDetails);
//       } else {
//         res.status(404).send(`Lesson ${req.params.id} not found.`);
//       }
//     } catch (error) {
//       apiErrorHandler(error, req, res, `Course ${req.params.id} is failed.`);
//     }
//   }
}