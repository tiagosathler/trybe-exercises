const sinon = require('sinon');
const { expect } = require('chai')

const MoviesController = require('../../controllers/movieController');
const MoviesServices = require('../../services/movieService');
const { request, response } = require('express');

describe.only('Ao chamar o controller de getById', () => {
  describe('quando não encontra o filme no banco de dados', async () => {
    const request = {};
    const response = {};

    before(async () => {
      request.body = {};
      request.params = { id: 10};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesServices, 'getById').resolves(undefined);
    });

    after(() => {
      MoviesServices.getById.restore();
    });

    it('é chamado o método "status" passando o código 404', async () => {
      await MoviesController.getById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);

    });

    it('é chamado o método "json" passando um objeto', async () => {
      await MoviesController.getById(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });

    it('é chamado o método "json" passando uma mensagem', async () => {
      await MoviesController.getById(request, response);

      expect(response.json.calledWith({message: 'Filme não encontrado'})).to.be.equal(true);
    });
  });

  describe('quando encontra o filme no banco de dados', () => {
    const request = {};
    const response = {};
    const movie = {
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
    };

    before(() => {
      request.body = {};
      request.params = { id: 1};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesServices, 'getById').resolves(movie);
    });

    after(() => {
      MoviesServices.getById.restore();
    });

    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.getById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um objeto', async () => {
      await MoviesController.getById(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });

    it('é chamado o método "json" o filme encontrado', async () => {
      await MoviesController.getById(request, response);

      expect(response.json.calledWith(movie)).to.be.equal(true);
    });
  });
})
