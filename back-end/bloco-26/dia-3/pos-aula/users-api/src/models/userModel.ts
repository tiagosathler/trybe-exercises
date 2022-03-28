import { Pool, ResultSetHeader } from 'mysql2/promise';

import IUser from '../typescript/interfaces/IUser';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;   
  }

  public getAll = async(): Promise<IUser[]> => {
    const query: string = `
    SELECT 
      id,
      first_name AS firstName,
      last_name AS lastName,
      email,
      password
    FROM users`;
    const [rows] = await this.connection.execute(query);
    return rows as IUser[];
  }

  public getById = async (id: number): Promise<IUser> =>{
    const query:string = `
    SELECT 
      id,
      first_name AS firstName,
      last_name AS lastName,
      email,
      password
    FROM users
    WHERE id = ?`;
    const params:number[] = [id];
    const [rows] = await this.connection.execute(query, params);
    const [user] = rows as IUser[];
    return user;
  }

  public create = async (user: IUser): Promise<IUser> => {
    const { firstName, lastName, email, password } = user;
    const query:string = `
    INSERT INTO users
    SET (first_name, last_name, email, password) = (?, ?, ?, ?)`;
    const params: string[] = [firstName, lastName, email, password];
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(query, params);
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public update = async (id: number, user: IUser): Promise<boolean> =>{
    const { firstName, lastName, email, password } = user;
    const query:string = `
    UPDATE users
    SET (first_name, last_name, email, password) = (?, ?, ?, ?)
    WHERE id = ?`;
    const params: [string, string, string, string, number] = [firstName, lastName, email, password, id];
    const [rows] = await this.connection.execute<ResultSetHeader>(query, params);
    const { affectedRows } = rows;
    if (affectedRows === 0) {
      return false;
    }
    return true;
  }

  public delete = async (id: number): Promise<boolean> => {
    const query: string = `DELETE FROM users WHERE id = ?`;
    const params: number[] = [id];
    const [rows] = await this.connection.execute<ResultSetHeader>(query, params);
    const { affectedRows } = rows;
    if (affectedRows === 0) {
      return false;
    }
    return true;
  }
}