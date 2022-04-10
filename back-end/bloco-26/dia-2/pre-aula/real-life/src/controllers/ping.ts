import { Request, Response } from 'express';

export default (_req: Request, res: Response): Response => {
  return res.status(200).json({ message: 'Pong!' });
};
