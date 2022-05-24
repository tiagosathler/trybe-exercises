import { config } from 'dotenv';
import mongoose, { Mongoose } from 'mongoose';

config();

const DB_HOST = process.env.DB_HOST || 'mongodb://localhost';
const DB_PORT = process.env.DB_PORT || '27017';
const DB_NAME = process.env.DB_NAME || 'GlassesTrybe';
const DB_USER = process.env.DB_USER || '';
const DB_PASS = process.env.DB_PASS || '';

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