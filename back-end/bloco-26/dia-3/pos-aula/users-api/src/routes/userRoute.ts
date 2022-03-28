import { Router } from 'express';
import UserController from '../controllers/userController';
import { Request, Response, NextFunction } from 'express';

export const userRoute: Router = Router();

const userController = new UserController();

userRoute
  .get('/', userController.getAll)
  .get('/test', (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: 'Hello World!' });
  })
  .get('/:id', userController.getById)
  .post('/', userController.create)
  .put('/:id', userController.update)
  .delete('/:id', userController.delete);