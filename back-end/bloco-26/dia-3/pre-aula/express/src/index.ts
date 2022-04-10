import express, { Express, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { config } from 'dotenv';
import cors = require('cors');
import 'express-async-errors';

import { TError } from './types/Error';
import BooksRoutes from './routes/books';


config();

const app: Express = express();

app.use(express.json(), cors());

const { API_PORT } = process.env || 8000;

app.get('/', (_req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use('/books', BooksRoutes);

app.use((err: Error , _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as TError;
  console.log(`name: ${name}`);

  switch(name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflitError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }
  next()
});

app.listen(API_PORT, () => {
    console.log(`Server is running at http://localhost:${API_PORT}`);
});