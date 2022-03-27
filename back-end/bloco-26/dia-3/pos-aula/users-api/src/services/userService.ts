import * as model from '../models';
import connection from '../models/connection';
import IUser from '../typescript/interfaces/IUser';
import Boom from 'boom';

export default class User {
  private model: model.User;

  constructor() {
    this.model = new model.User(connection);
  }

  public async getAll(): Promise<IUser[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<IUser> {
    const user = await this.model.getById(id);
    return user;
  }

  public async create(user: IUser): Promise<IUser> {
    const newUser = await this.model.create(user);
    return newUser;
  }

  public async update(id: number, user: IUser): Promise<void> {
    const updatedUser: boolean = await this.model.update(id, user);
    if (!updatedUser) {
      throw Boom.badRequest('User not found');
    }
  }

  public async delete(id: number): Promise<void> {
    const deletedUser: boolean = await this.model.delete(id);
    if (!deletedUser) {
      throw Boom.badRequest('User not found');
    }
  }
}