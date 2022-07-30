import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import FrameService from '../services/Frame';
import Frame from '../interfaces/Frame';

class FrameController extends Controller<Frame> {
  private _route: string;

  constructor(
    service = new FrameService(),
    route = '/frames',
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
    req: RequestWithBody<Frame>,
    res: Response<Frame | ResponseError>,
  ): Promise<typeof res> {
    const { body } = req;
    try {
      const frame = await this.service.create(body);
      if (!frame) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in frame) {
        return res.status(400).json(frame);
      }
      return res.status(201).json(frame);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: this.errors.internal });
    }
  }

  public async read(
    _req: Request,
    res: Response<Frame[] | ResponseError>,
  ) {
    try {
      const frames = await this.service.read();
      return res.json(frames);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: this.errors.internal });
    }
  }

  public async readOne(
    req: Request<{ id: string }>,
    res: Response<Frame | ResponseError>,
  ): Promise<typeof res> {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: this.errors.badRequest });
    try {
      const frame = await this.service.readOne(id);
      return frame
        ? res.json(frame)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: this.errors.internal });
    }
  }

  public async update(
    req: Request<{ id: string }, unknown, Frame>,
    res: Response<Frame | ResponseError>,
  ): Promise<typeof res> {
    const { id } = req.params;
    const { body } = req;

    if (!id) return res.status(400).json({ error: this.errors.badRequest });

    try {
      const frame = await this.service.update(id, body);
      return frame
        ? res.json(frame)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: this.errors.internal });
    }
  }

  public async delete(
    req: Request<{ id: string }>,
    res: Response<Frame | ResponseError>,
  ): Promise<typeof res> {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: this.errors.badRequest });

    try {
      const frame = await this.service.delete(id);
      return frame
        ? res.json(frame)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: this.errors.internal });
    }
  }
}

export default FrameController;