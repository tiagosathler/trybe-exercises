import { Request, Response, NextFunction } from 'express';
import Boom from 'boom';

export const handleInvalidEndpoint = (req: Request, res: Response, next: NextFunction) => {
  return next(Boom.badRequest('Endpoint not found'));
}