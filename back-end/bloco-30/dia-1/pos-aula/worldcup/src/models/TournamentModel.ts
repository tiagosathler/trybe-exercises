import { model as createModel } from 'mongoose';
import { TournamentSchema, ITournament } from '../schemas/TournamentSchema';

export default class TournamentModel {
  constructor(private _mongoose = createModel<ITournament>('tournaments', TournamentSchema)) {}

  public async getTournaments(): Promise<ITournament[]> {
    return this._mongoose.find();
  }
}