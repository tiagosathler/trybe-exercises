import { Model, Document } from 'mongoose';
import IModel from '.';

abstract class MongoModel<T> implements IModel<T> {
  constructor(protected db: Model<T & Document>) { }

  public async create(obj: T): Promise<T> { 
    return this.db.create({ ...obj });
  }

  public async read(): Promise<T[]> {
    return this.db.find();
  }

  public async readOne(id: string): Promise<T | null> {
    return this.db.findOne({ _id: id });
  }

  public async update(id: string, obj: T): Promise<T | null> {
    return this.db.findOneAndUpdate({ _id: id }, { ...obj }, { new: true });
  }

  public async delete(id: string): Promise<T | null> {
    return this.db.findOneAndDelete({ _id: id });
  }
}

export default MongoModel;