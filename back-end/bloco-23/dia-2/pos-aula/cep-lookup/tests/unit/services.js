const sinon = require('sinon');
const { expect } = require('chai');

const Services = require('../../services');
const Models = require('../../models');

const RESPONSES = {
  validCep: {
    cep: '01001-000',
    logradouro: 'Praça da Sé',
    bairro: 'Sé',
    localidade: 'São Paulo',
    uf: 'SP',
   },
};

describe('--- SERVICES TESTS', () => {
  describe('1. Cep Services', () => {
    describe('1.1. findByCep', () => {

      afterEach(() => {
        Models.Cep.findByCep.restore();
      })

      it('found CEP', async () => {
        sinon.stub(Models.Cep, 'findByCep').resolves(RESPONSES.validCep);
        const result = await Services.Cep.findByCep('01001000');
        expect(result).to.deep.equal(RESPONSES.validCep);
      })

      it('CEP not found', async () => {
        sinon.stub(Models.Cep, 'findByCep').resolves(null);
        const result = await Services.Cep.findByCep('99999000');
        expect(result).to.null;
      })
    })
  })
})