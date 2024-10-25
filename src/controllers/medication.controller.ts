import { Request, Response, NextFunction } from 'express';
import { MedicationRepository } from '../repositories/medication-repository';
import { IMedication } from '../models/medication/IMedication';
// import CourseRepo from './../repositories/CoursesRepo';
// import { apiErrorHandler } from './../handlers/errorHandler';

export default class MedicationController {
  constructor() { }

  async save(req: Request, res: Response, next: NextFunction) {
    const medicationRepo = new MedicationRepository();

    try {
        const success = await medicationRepo.save(req.body as IMedication)

        return res.json({success});
      } catch (error) {
        // apiErrorHandler(error, req, res, 'Fetch All Courses failed.');
      }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const medicationRepo = new MedicationRepository();

      const medicationList =  await medicationRepo.getAll();
      return res.json(medicationList);
    } catch (error) {
      return res.json({error: error});
    }
  }

  async updateMedication(req: Request, res: Response, next: NextFunction) {
    try {
      const medicationRepo = new MedicationRepository();
      const medication =  await medicationRepo.update(req.params.id as string, req.body as IMedication);
      return res.json(medication);
    } catch (err) { 
      return res.json({error: err});
    }
  }

  async deleteById(req: Request, res: Response, next: NextFunction){
    try {
      const medicationRepo = new MedicationRepository();
      const medication = await medicationRepo.deleteById(req.params.id as string);
      return res.json(medication);
    } catch (err) {
      return res.json({error: err});
    }
  }
}