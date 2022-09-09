import { config } from 'dotenv';
import App from './app';

config();

const API_PORT = process.env.API_PORT || 3000;

const app = new App();

app.start(API_PORT);