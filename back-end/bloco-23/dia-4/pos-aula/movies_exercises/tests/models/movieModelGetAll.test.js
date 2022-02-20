const { expect } = require('chai');
const sinon = require('sinon');
// const { MongoClient } = require('mongodb');

const { getConnection } = require('../models/mongoMockConnection');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

const moviesMock = [[{
  id: 1,
  title: 'Example Movie',
  directed_by: 'Jane Dow',
  release_year: 1999,
}]];

const expectedMovie = {
  id: 1,
  title: 'Example Movie',
  directedBy: 'Jane Dow',
  releaseYear: 1999,
};

describe('Busca todos os filmes', () => {
  
  describe('Quando não existe nenhum filme criado', () => {

    before(async () => {
      sinon.stub(connection, 'execute').resolves([[]]);
    });


    after(() => {
      connection.execute.restore();
    });
        
    it('retorna uma array', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.be.an('array');
    });

    it('a array está vazia', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.be.empty;
    });
  });

  describe('Quando existem filmes cadastrados', () => {
    before(async () => {
      sinon.stub(connection, 'execute').resolves(moviesMock);
    });


    after(() => {
      connection.execute.restore();
    });

    it('retorna uma array', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.be.an('array');
    });

    it('a array não está vazia!', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.be.not.empty;
    });

    it('a array possui dados do tipo objeto', async () => {
      const [ item ] = await MoviesModel.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possuem os atributos "id", "title", "directedBy", "releaseYear"', async () => {
      const [ item ] = await MoviesModel.getAll();

      expect(item).to.include.all.keys(['id', 'title', 'directedBy', 'releaseYear']);
    });

    it('o filme cadastrado está na lista', async () => {
      const [ { id, title, directedBy, releaseYear } ] = await MoviesModel.getAll();

      expect({ id, title, directedBy, releaseYear }).to.deep.equal(expectedMovie);
    });
  });
});
