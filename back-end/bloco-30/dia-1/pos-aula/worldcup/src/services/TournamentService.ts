import TournamentModel from '../models/TournamentModel';
import { ITournament } from '../schemas/TournamentSchema';

export default class TournamentService {
  constructor(private _model = new TournamentModel()) {}

  public async getTournaments(): Promise<ITournament[]> {
    return this._model.getTournaments();
  }
}
