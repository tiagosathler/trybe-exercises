const sinon = require('sinon');
const { expect } = require('chai');
const fs = require('fs/promises');

const {
  testNumberSign,
  fileRecorder,
} = require('../services/index');

const MESSAGE_NOT_NUMBER = 'o valor deve ser um número';

describe(() => {

  
  describe("1. Testando 'testNumberSign'", () => {
    it("1.1. retorna 'null' se o parametro 'number' não for passado", () => {
      const result = testNumberSign();
      expect(result).to.be.equal(null);
    })
    it("1.2. retorna 'o valor deve ser um número' se o parametro 'number' não for número", () => {
      
      let result = testNumberSign('oi');
      expect(result).to.be.a('string');
      expect(result).to.be.equal(MESSAGE_NOT_NUMBER);
      result = testNumberSign(true);
      expect(result).to.be.a('string');
      expect(result).to.be.equal(MESSAGE_NOT_NUMBER);
      result = testNumberSign(['ois']);
      expect(result).to.be.a('string');
      expect(result).to.be.equal(MESSAGE_NOT_NUMBER);
      result = testNumberSign({ foo: 'bar'});
      expect(result).to.be.a('string');
      expect(result).to.be.equal(MESSAGE_NOT_NUMBER);
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

describe("2. Testando escrita em arquivo", () => {
  before(() => {
    sinon.stub(fs, 'writeFile').resolves('ok');
  })
  
  after(() => {
    fs.writeFile.restore();
  })
  
  it("2.1. se o nome do arquivo foi passado", async () => {
    const content = await fileRecorder();
    expect(content).to.be.equal('o nome do arquivo é requerido');
  })
  it('2.2. o conteúdo é requerido', async () => {
    const content = await fileRecorder('meu_arquivo.txt');
    expect(content).to.be.equal('o conteúdo é requerido');    
  })
  it('2.3. a escrita funcionou', async () => {
    const content = await fileRecorder('meu_arquivo.txt', 'olá');
    expect(content).to.be.equal('ok');
  })
})
})