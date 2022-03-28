import UserModel from '../models/userModel';
import connection from '../models/connection';
// import connection from '../models/connection';
import IUser from '../typescript/interfaces/IUser';
import Boom from 'boom';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public getAll = async (): Promise<IUser[]> => {
    const users = await this.model.getAll();
    return users;
  }

  public getById = async (id: number): Promise<IUser> => {
    const user = await this.model.getById(id);
    return user;
  }

  public create = async (user: IUser): Promise<IUser> => {
    const newUser = await this.model.create(user);
    return newUser;
  }

  public update = async (id: number, user: IUser): Promise<void> => {
    const updatedUser: boolean = await this.model.update(id, user);
    if (!updatedUser) {
      throw Boom.badRequest('User not found');
    }
  }

  public delete = async (id: number): Promise<void> => {
    const deletedUser: boolean = await this.model.delete(id);
    if (!deletedUser) {
      throw Boom.badRequest('User not found');
    }
  }
}