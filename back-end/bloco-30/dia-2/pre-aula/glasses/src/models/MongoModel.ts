import { Model as M, Document } from 'mongoose';
import Model from '.';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { }

  public async create(obj: T): Promise<T> { 
    return this.model.create({ ...obj });
  }

  public async read(): Promise<T[]> {
    return this.model.find();
  }

  public async readOne(id: string): Promise<T | null> {
    return this.model.findOne({ _id: id });
  }
}

export default MongoModel;