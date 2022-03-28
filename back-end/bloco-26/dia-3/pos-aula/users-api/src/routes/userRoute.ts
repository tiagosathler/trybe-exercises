import { Router } from 'express';
import * as controller from '../controllers';
import { Request, Response, NextFunction } from 'express';

export const userRoute: Router = Router();

const userController = new controller.User();

userRoute
  .get('/', userController.getAll)
  .get('/test', (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: 'Hello World!' });
  })
  .get('/:id', userController.getById)
  .post('/', userController.create)
  .put('/:id', userController.update)
  .delete('/:id', userController.delete);