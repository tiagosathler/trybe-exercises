const sinon = require('sinon');
const { expect } = require('chai');
const Models = require('../../models');
const connection = require('../../models/connection');

const RESPONSES = {
  resultCep: [{
    cep: '01001000',
    logradouro: 'Praça da Sé',
    bairro: 'Sé',
    localidade: 'São Paulo',
    uf: 'SP',
  }],
  validCep: {
    cep: '01001-000',
    logradouro: 'Praça da Sé',
    bairro: 'Sé',
    localidade: 'São Paulo',
    uf: 'SP',
   },
};

describe('--- MODELS TESTS', () => {
  describe('1. Cep Models', () => {
    describe('1.1. findByCep', () => {

      afterEach(() => {
        connection.execute.restore();
      });

      it('found CEP', async () => {
        sinon.stub(connection, 'execute').resolves([RESPONSES.resultCep]);
        const result = await Models.Cep.findByCep('01001000');
        expect(result).to.deep.equal(RESPONSES.validCep);
      });

      it('not found CEP', async () => {
        sinon.stub(connection, 'execute').resolves([[]]);
        const result = await Models.Cep.findByCep('99999000');
        expect(result).to.be.null;
      });
    });
  });
})