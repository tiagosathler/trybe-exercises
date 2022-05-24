import { model } from 'mongoose';
import { TournamentSchema, ITournament } from '../schemas/TournamentSchema';

export default class TournamentModel {
  constructor(public mongooseModel = model<ITournament>('tournaments', TournamentSchema)) {}

  public async getTournaments(): Promise<ITournament[]> {
    return this.mongooseModel.find();
  }
}