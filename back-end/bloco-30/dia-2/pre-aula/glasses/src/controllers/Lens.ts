import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import LensService from '../services/Lens';
import Lens from '../interfaces/Lens';

class LensController extends Controller<Lens> {
  private _route: string;

  constructor(
    service = new LensService(),
    route = '/lenses',
  ) {
    super(service);
    this._route = route;
    this.create = this.create.bind(this);
    this.read = this.read.bind(this);
    this.readOne = this.readOne.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  get route() { return this._route; }

  public async create(
    req: RequestWithBody<Lens>,
    res: Response<Lens | ResponseError>,
  ): Promise<typeof res> {
    const { body } = req;
    try {
      const lens = await this.service.create(body);
      if (!lens) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in lens) {
        return res.status(400).json(lens);
      }
      return res.status(201).json(lens);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: this.errors.internal });
    }
  }

  public async read(
    _req: Request,
    res: Response<Lens[] | ResponseError>,
  ) {
    try {
      const lenses = await this.service.read();
      return res.json(lenses);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: this.errors.internal });
    }
  }

  public async readOne(
    req: Request<{ id: string; }>,
    res: Response<Lens | ResponseError>,
  ): Promise<typeof res> {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: this.errors.badRequest });

    try {
      const lens = await this.service.readOne(id);
      return lens
        ? res.json(lens)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: this.errors.internal });
    }
  }

  public async update(
    req: Request<{ id: string }, unknown, Lens>,
    res: Response<Lens | ResponseError>,
  ): Promise<typeof res> {
    const { id } = req.params;
    const { body } = req;

    if (!id) return res.status(400).json({ error: this.errors.badRequest });

    try {
      const lens = await this.service.update(id, body);
      return lens
        ? res.json(lens)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: this.errors.internal });
    }
  }

  public async delete(
    req: Request<{ id: string }>,
    res: Response<Lens | ResponseError>,
  ) {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: this.errors.badRequest });

    try {
      const lens = await this.service.delete(id);
      return lens
        ? res.json(lens)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: this.errors.internal });
    }
  }
}

export default LensController;