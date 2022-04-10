const { expect } = require('chai');
const res = require('express/lib/response');
const sinon = require('sinon');

const Schemas = require('../../schemas');

describe('--- SCHEMAS TEST', () => {
  describe('1. schema cepIsValid', () => {
    it('1.1. test some invalids CEP', () => {
      let response = Schemas.isValidCep('36.976-000', /\d{5}-?\d{3}/g);
      expect(response).to.be.false;

      response = Schemas.isValidCep('36976-abc', /\d{5}-?\d{3}/g);
      expect(response).to.be.false;
      
      response = Schemas.isValidCep('36976abc', /\d{5}-?\d{3}/g);
      expect(response).to.be.false;

      response = Schemas.isValidCep('36976', /\d{5}-?\d{3}/g);
      expect(response).to.be.false;;
    });

    it('1.2. test some valids CEP', () => {
      let response = Schemas.isValidCep('36976-000', /\d{5}-?\d{3}/g);
      expect(response).to.be.true;
      response = Schemas.isValidCep('36976000', /\d{5}-?\d{3}/g);
      expect(response).to.be.true;
    })
  })
});
