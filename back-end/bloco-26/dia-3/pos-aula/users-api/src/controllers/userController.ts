import * as service from '../services';
import { Request, Response } from 'express';
import IUser from '../typescript/interfaces/IUser';

export class User {
  private userService: service.User;

  constructor() {
    this.userService = new service.User();
   }

  public getAll = async (_req: Request, res: Response) => {
    const users: IUser[] = await this.userService.getAll();
    return res.status(200).json(users);
  }

  public getById = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const user: IUser = await this.userService.getById(+id);
    return res.status(200).json(user);
  }

  public create = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password }: IUser = req.body;
    const newUser: IUser = await this.userService.create({ firstName, lastName, email, password });
    return res.status(201).json(newUser);
  }

  public update = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const { firstName, lastName, email, password }: IUser = req.body;
    await this.userService.update(+id, { firstName, lastName, email, password });
    return res.status(204).end();
  }

  public delete = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    await this.userService.delete(+id);
    return res.status(200).end();
  }
}