import { expect } from 'chai';
import Sinon from 'sinon';

import TournamentService from '../src/services/TournamentService';
import TournamentModel from '../src/models/TournamentModel';

import { tournaments } from './data';

describe('Get Tournaments', () => {
  const tournamentModel = new TournamentModel();
  const tournamentService = new TournamentService();
  
  describe('-> testando a Model', () => {
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

  describe('-> testando a Service', () => {
    before(() => {
      Sinon.stub(tournamentService.model, 'getTournaments').resolves(tournaments);
    });

    after(() => {
      Sinon.restore();
    });

    it('... retorna um array', async () => {
      const response = await tournamentService.getTournaments();
      expect(response).to.be.an('array');
    });

    it('... espera que seja igual ao mocado', async () => {
      const response = await tournamentService.getTournaments();
      expect(response).to.deep.equal(tournaments);
    });
  });
});