import { config } from 'dotenv';
import mongoose, { Mongoose } from 'mongoose';

config();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

const DB_URI = `${DB_HOST}:${DB_PORT}`;

const CONFIG = {
  user: DB_USER,
  pass: DB_PASS,
  autoIndex: true,
  dbName: DB_NAME,
};

const connectToDatabase = (mongoDatabaseURI: string = DB_URI)
: Promise<Mongoose> => mongoose.connect(mongoDatabaseURI, CONFIG);

export default connectToDatabase;