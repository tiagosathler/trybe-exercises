const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../src/api/app');

// Importação do modelo original, contido em `models`, a partir da raiz, em `/src`
const { User } = require('../src/models');
// Importação do mock utilizado nesse contexto
const { User: userMock } = require('./mock/models');

chai.use(chaiHttp);
const { expect } = chai;

describe.only('-- Rota /api/users/:id', () => {
  const ENDPOINT_USER_NOT_FOUND = '/api/users/100';
  const ENDPOINT_AUTO_USER = '/api/users/1';
  const ENDPOINT_OTHER_USER = '/api/users/2';
  const ENDPOINT_LOGIN = '/api/login';

  before(() => {
    sinon.stub(User, 'findOne').callsFake(userMock.findOne);
    sinon.stub(User, 'findByPk').callsFake(userMock.findByPk);
  });
    
  after(() => {
    User.findOne.restore();
    User.findByPk.restore();
  });

  describe('- requisição sem token', () => {
    let result;
  
    before(async () => {
      const { body: { token } } = await chai
        .request(server)
        .post(ENDPOINT_LOGIN)
        .send({ 
          '_method': 'post',
          'username': 'Saul Reixas',
          'password': 'tocasaul',
        });
        
      result = await chai
        .request(server)
        .get(ENDPOINT_AUTO_USER)
        // .set('authorization', token);
        console.log('Status: ', result.status, 'Body: ', result.body);
    });

    after(() => {
      result = undefined;
    });

    
    it('Essa requisição deve retornar código de status 400', () => {
      expect(result).to.have.status(400);
    });

    it('A requisição deve retornar um objeto no corpo da resposta', () => {
      expect(result.body).to.be.an('object');
    });

    it('O objeto possui a propriedade "message"', () => {
      expect(result.body).to.have.property('message');
    });

    it('A propriedade "message" possui o texto "Erro ao acessar o endpoint"', () => {
      expect(result.body.message).to.be.equal('Token não encontrado ou informado ');
    });
  });

  describe('- requisição com token inválido', () => {
    let result;
  
    before(async () => {
      const { body: { token } } = await chai
        .request(server)
        .post(ENDPOINT_LOGIN)
        .send({ 
          '_method': 'post',
          'username': 'Saul Reixas',
          'password': 'tocasaul',
        });
        
      result = await chai
        .request(server)
        .get(ENDPOINT_AUTO_USER)
        .set('authorization', 'xablau');
        console.log('Status: ', result.status, 'Body: ', result.body);
    });

    after(() => {
      result = undefined;
    });

    
    it('Essa requisição deve retornar código de status 500', () => {
      expect(result).to.have.status(500);
    });

    it('A requisição deve retornar um objeto no corpo da resposta', () => {
      expect(result.body).to.be.an('object');
    });

    it('O objeto possui a propriedade "message"', () => {
      expect(result.body).to.have.property('message');
    });

    it('O objeto possui a propriedade "error"', () => {
      expect(result.body).to.have.property('error');
    });

    it('A propriedade "message" possui o texto "Erro ao acessar o endpoint"', () => {
      expect(result.body.message).to.be.equal('Erro ao acessar o endpoint');
    });

    it('A propriedade "error" possui o texto "É necessário um token válido para acessar esse endpoint"', () => {
      expect(result.body.error).to.be.equal(
        'É necessário um token válido para acessar esse endpoint',
      );
    });
  });

  describe('- requisição com token válido mas username não autorizado pelo id', () => {
    let result;
  
    before(async () => {
      const { body: { token } } = await chai
        .request(server)
        .post(ENDPOINT_LOGIN)
        .send({ 
          '_method': 'post',
          'username': 'Saul Reixas',
          'password': 'tocasaul',
        });
        
      result = await chai
        .request(server)
        .get(ENDPOINT_OTHER_USER)
        .set('authorization', token);
        console.log('Status: ', result.status, 'Body: ', result.body);
    });

    after(() => {
      result = undefined;
    });

    
    it('Essa requisição deve retornar código de status 401', () => {
      expect(result).to.have.status(401);
    });

    it('A requisição deve retornar um objeto no corpo da resposta', () => {
      expect(result.body).to.be.an('object');
    });

    it('O objeto possui a propriedade "message"', () => {
      expect(result.body).to.have.property('message');
    });

    it('A propriedade "message" possui o texto "Acesso negado"', () => {
      expect(result.body.message).to.be.equal('Acesso negado');
    });
  });
    
  describe('- requisição com token válido e quando a pesquisa não encontra o usuário', () => {
    let result;
  
    before(async () => {
      const { body: { token } } = await chai
        .request(server)
        .post(ENDPOINT_LOGIN)
        .send({ 
          '_method': 'post',
          'username': 'Saul Reixas',
          'password': 'tocasaul',
        });
        
      result = await chai
        .request(server)
        .get(ENDPOINT_USER_NOT_FOUND)
        .set('authorization', token);
        console.log('Status: ', result.status, 'Body: ', result.body);
    });

    after(() => {
      result = undefined;
    });

    
    it('Essa requisição deve retornar código de status 404', () => {
      expect(result).to.have.status(404);
    });

    it('A requisição deve retornar um objeto no corpo da resposta', () => {
      expect(result.body).to.be.an('object');
    });

    it('O objeto possui a propriedade "message"', () => {
      expect(result.body).to.have.property('message');
    });

    it('A propriedade "message" possui o texto "Usuário não encontrado"', () => {
      expect(result.body.message).to.be.equal(
        'Usuário não encontrado',
      );
    });
  });

  describe('- requisição com token válido e quando a pesquisa encontra o usuário', () => {
    let result;
  
    before(async () => {
      const { body: { token } } = await chai
        .request(server)
        .post(ENDPOINT_LOGIN)
        .send({ 
          '_method': 'post',
          'username': 'Saul Reixas',
          'password': 'tocasaul',
        });
        
      result = await chai
        .request(server)
        .get(ENDPOINT_AUTO_USER)
        .set('authorization', token);
        console.log('Status: ', result.status, 'Body: ', result.body);
    });

    after(() => {
      result = undefined;
    });

    
    it('Essa requisição deve retornar código de status 200', () => {
      expect(result).to.have.status(200);
    });

    it('A requisição deve retornar um objeto no corpo da resposta', () => {
      expect(result.body).to.be.an('object');
    });

    it('O objeto possui a propriedade "id"', () => {
      expect(result.body).to.have.property('id');
    });

    it('O objeto possui a propriedade "username"', () => {
      expect(result.body).to.have.property('username');
    });

    it('A propriedade "id" possui o número "1"', () => {
      expect(result.body.id).to.be.equal(1);
    });

    it('A propriedade "username" possui o texto "Saul Reixas"', () => {
      expect(result.body.username).to.be.equal(
        'Saul Reixas',
      );
    });
  }); 
});
