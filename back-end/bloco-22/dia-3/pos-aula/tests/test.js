const sinon = require('sinon');
const { expect } = require('chai');

const {
  testNumberSign
} = require('../services/index');

describe("1. Testando 'testNumberSign'", () => {
  it("1.1. se o parametro 'number' existe"), () => {
    const result = testNumberSign();
    expect(result).to.be.equal(null);
  }
  it("1.2. se o parametro 'number' é um número", () => {
    const result = testNumberSign('oi');
    expect(result).to.be.equal(null);
  })
  it("1.3. retorna 'positivo' quando o parâmetro 'number > 0'", () => {
    const result = testNumberSign(4);
    expect(result).to.be.a('string');
    expect(result).to.be.equal('positivo');
  })
  it("1.4. retorna 'negativo' quando o parâmetro 'number < 0'", () => {
    const result = testNumberSign(-4);
    expect(result).to.be.a('string');
    expect(result).to.be.equal('negativo');
  })
  it("1.5. retorna 'neutro' quando o parâmetro 'number = 0'", () => {
    const result = testNumberSign(0);
    expect(result).to.be.a('string');
    expect(result).to.be.equal('neutro');
  })
})