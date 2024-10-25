import { Request, Response, NextFunction } from 'express';
import { TodoRepository } from '../repositories/todo-repository';
import { ITodo } from '../models/todo/ITodo';

export default class TodoController {
  constructor() { }

  async save(req: Request, res: Response, next: NextFunction) {
    const todoRepo = new TodoRepository();

    try {
        const success = await todoRepo.save(req.body as ITodo)

        return res.json({success});
      } catch (error) {
        console.log({error: error});
      }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const todoRepo = new TodoRepository();

      const todoList =  await todoRepo.getAll();
      return res.json(todoList);
    } catch (error) {
      return res.json({error: error});
    }
  }

  async getByStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const todoRepo = new TodoRepository();
      const todoList =  await todoRepo.getByStatus(req.params.status as unknown as boolean); // pega status da url
      return res.json(todoList);
    } catch (err) { 
      return res.json({error: err});
    }
  }

  async getByDate(req: Request, res: Response, next: NextFunction) {
    try {
      const todoRepo = new TodoRepository();
      const todoList =  await todoRepo.getByDate(req.params.date as unknown as string); // pega status da url
      return res.json(todoList);
    } catch (err) { 
      return res.json({error: err});
    }
  }

  async updateTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const todoRepo = new TodoRepository();
      const todo =  await todoRepo.update(req.params.id as string, req.body as ITodo);
      return res.json(todo);
    } catch (err) { 
      return res.json({error: err});
    }
  }

  async deleteById(req: Request, res: Response, next: NextFunction){
    try {
      const todoRepo = new TodoRepository();
      const todo = await todoRepo.deleteById(req.params.id as string);
      return res.json(todo);
    } catch (err) {
      return res.json({error: err});
    }
  }
}