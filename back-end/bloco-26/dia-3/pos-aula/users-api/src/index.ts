import { config } from 'dotenv';
import app from './api/server';

config();

const { API_PORT } = process.env || 3000;

app.listen(API_PORT, () => {
  console.log('Listening on port: ', API_PORT);
});