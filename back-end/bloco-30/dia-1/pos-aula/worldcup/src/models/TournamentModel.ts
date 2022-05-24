import { model as createModel } from 'mongoose';
import { TournamentSchema, ITournament } from '../schemas/TournamentSchema';

export default class TournamentModel {
  constructor(private _model = createModel<ITournament>('tournament', TournamentSchema)) {}

  public async getTournaments(): Promise<ITournament[]> {
    return this._model.find();
  }
}