import express, { Express } from 'express';
import { Mongoose } from 'mongoose';
import routes from './routes';
import connection from '../models/connection';

export default class Api {
  private _app: Express;

  private _connection: Promise<Mongoose>;

  constructor() {
    this._app = express();
    this._middlewares();
    this._mountRoutes();
    this._connection = connection();
  }

  private _middlewares(): void {
    this._app.use(express.json());
  }

  private _mountRoutes(): void {
    this._app.use(routes);
  }

  public start(port: number | string): void {
    this._app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}