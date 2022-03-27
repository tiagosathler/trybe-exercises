import { Request, Response, NextFunction } from 'express';
import Boom from 'boom';

const handleError = (err: Boom | Error, _req: Request, res: Response, _next: NextFunction):Response => {
  if (Boom.isBoom(err)) {
    const { output: { payload: { statusCode, message, error }} } = err;
    const phrase: string = `===> BOOM ERROR: status: ${statusCode}, message: ${message}, error: ${error}`;
    console.log(phrase);
    return res.status(statusCode).json(message);
  }
  console.error(err);
  return res.status(500).json(err.message);
}

export default handleError;