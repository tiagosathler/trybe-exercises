import express, { Request, Response } from 'express';
import Plants from './class/plants';

const app = express();

app.use(express.json());

app.get('/plants', async (_req: Request, res: Response): Promise<Response> => {
  const plants = await (new Plants().getPlants());
  return res.status(200).json(plants);
});

app.get('/plants/:id', async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const plant = await (new Plants().getPlantById(id));
  if (!plant) return res.status(404).json({ error: 'Plant not found' });
  return res.status(200).json(plant);
});

app.delete('/plants/:id', async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const plant = await (new Plants().removePlantById(id));
  if (!plant) return res.status(404).json({ error: 'Plant not found' });
  return res.status(204).end();
});

app.put('/plants/:id', async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const newPlant = req.body;
  const plant = await (new Plants().editPlant(id, newPlant));
  if (!plant) return res.status(404).json({ error: 'Plant not found' });
  return res.status(200).json(plant);
});

app.post('/plants', async (req: Request, res: Response): Promise<Response> => {
  const newPlant = req.body;

  const plant = await (new Plants().savePlant(newPlant));
  return res.status(201).json(plant);
});

app.get('/sunny/:id', async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const plant = await (new Plants().getPlantsThatNeedsSunWithId(id));
  if (!plant.length) return res.status(404).json({ error: 'Plant not found' });
  return res.status(200).json(plant);
});

app.listen(3000, () => {
  console.log('Ouvindo na porta 3001!');
});