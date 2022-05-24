import { expect } from 'chai';
import Sinon from 'sinon';

import TournamentModel from '../src/models/TournamentModel';

import { tournaments } from './data';

describe('Get Tournaments', () => {
  const tournamentModel = new TournamentModel();
  
  describe('-> testando o método getTournaments da Model', () => {
    before(() => {
      Sinon.stub(tournamentModel.mongooseModel, 'find').resolves(tournaments);
    });

    after(() => {
      Sinon.restore();
    });

    it('... retorna um array', async () => {
      const response = await tournamentModel.getTournaments();
      expect(response).to.be.an('array');
    });

    it('... espera que seja igual ao mocado', async () => {
      const response = await tournamentModel.getTournaments();
      expect(response).to.deep.equal(tournaments);
    });
  });
});