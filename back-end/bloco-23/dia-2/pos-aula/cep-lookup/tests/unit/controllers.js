const sinon = require('sinon');
const { expect } = require('chai');


const Controllers = require('../../controllers');
const Services = require('../../services');

const RESPONSES = {
  validCep: {
    cep: '01001-000',
    logradouro: 'Praça da Sé',
    bairro: 'Sé',
    localidade: 'São Paulo',
    uf: 'SP',
   },
   invalidCep:  {
     error: { code: 'invalidData', message: 'CEP inválido' },
   },
   cepNotFound: {
     error: { code: 'notFound', message: 'CEP não encontrado' },
   },
}

describe('--- CONTROLLERS TESTS', ()=> {
  describe('1. Cep controllers', () => {
    describe('1.1. find any Cep', () => {
      const req = {};
      const res = {};
      const obj = {
        next: (value) => value,
      };
      const next = sinon.spy(obj, 'next');  
      
      beforeEach(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
      })
      
      afterEach(() => {
        Services.Cep.findByCep.restore();
      })
      
      it('find truthy CEP', async () => {
        req.params = { cep: '01001-000' };
        sinon.stub(Services.Cep, 'findByCep').resolves(RESPONSES.validCep);
        await Controllers.Cep.findCep(req, res, next);
        expect(res.status.calledWith(200)).to.be.true;        
        expect(res.json.calledWith(RESPONSES.validCep)).to.be.true;
      })
      
      it('find invalid CEP', async () => {
        req.params = { cep: '01001' };
        sinon.stub(Services.Cep, 'findByCep').resolves(null);
        await Controllers.Cep.findCep(req, res, next);
        expect(next.calledWith(RESPONSES.invalidCep)).to.be.true;
      })

      it('not found CEP', async () => {
        req.params = { cep: '01001-100' };
        sinon.stub(Services.Cep, 'findByCep').resolves(null);
        await Controllers.Cep.findCep(req, res, next);
        expect(next.calledWith(RESPONSES.cepNotFound)).to.be.true;
      })
    })
   })
})

