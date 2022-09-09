import { config } from 'dotenv';
import mongoose, { Mongoose } from 'mongoose';

config();

const DB_HOST = process.env.DB_HOST || 'mongodb://localhost';
const DB_PORT = process.env.DB_PORT || '27017';
const DB_NAME = process.env.DB_NAME || 'world_cups';
const DB_USER = process.env.DB_USER || '';
const DB_PASS = process.env.DB_PASS || '';

const DB_URI = `${DB_HOST}:${DB_PORT}`;

console.log('DB_HOST', DB_HOST);
console.log('DB_PORT', DB_PORT);
console.log('DB_NAME', DB_NAME);
console.log('DB_USER', DB_USER);
console.log('DB_PASS', DB_PASS);
console.log('DB_URI', DB_URI);

const CONFIG = {
  user: DB_USER,
  pass: DB_PASS,
  autoIndex: true,
  dbName: DB_NAME,
};

const connection = (uri: string = DB_URI):Promise<Mongoose> => mongoose.connect(uri, CONFIG);

export default connection;
