import express, { Request, Response } from 'express';
import Plants from './class/Plants';

const app = express();

app.use(express.json());

app.get('/plants', async (_req: Request, res: Response) => {
  const plants = await (new Plants().getPlants());
  res.status(500).json(plants);
});

app.listen(3000, () => {
  console.log('Ouvindo na porta 3001!');
});