import { Request, Response, NextFunction } from 'express';
import { TError } from '../types/types';

export default (err: TError, _req: Request, res: Response, _next: NextFunction): Response => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({
      error: { message: err.message },
    });
  }
  console.error(err);

  return res.status(500).json({
    error: {
      message: `Internal server error: ${err.message}`,
    },
  });
};
