import { Request, Response } from 'express';
import TournamentService from '../services/TournamentService';

export default class TournamentCtrl {
  constructor(private _service = new TournamentService()) {}

  public async getTournaments(_req: Request, res: Response): Promise<Response> {
    try {
      const tournaments = await this._service.getTournaments();
      return res.status(200).json(tournaments);
    } catch (error: unknown) {
      return res.status(500).json(error);
    }
  }
}