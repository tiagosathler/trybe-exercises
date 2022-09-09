import TournamentModel from '../models/TournamentModel';
import { ITournament } from '../schemas/TournamentSchema';

export default class TournamentService {
  constructor(public model = new TournamentModel()) {}

  public async getTournaments(): Promise<ITournament[]> {
    return this.model.getTournaments();
  }
}
