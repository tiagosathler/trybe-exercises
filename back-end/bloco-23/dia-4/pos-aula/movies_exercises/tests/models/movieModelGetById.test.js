const { expect } = require('chai');
const sinon = require('sinon');

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

describe('Busca um filme pelo id', () => {
  
  describe('Quando não encontra o filme', () => {

    before(async () => {
      sinon.stub(connection, 'execute').resolves([[]]);
    });


    after(() => {
      connection.execute.restore();
    });
        
    it('retorna undefined', async () => {
      const movies = await MoviesModel.getById(3);

      expect(movies).to.be.undefined;
    });

    
  });

  describe('Quando encontra o filme cadastrado', () => {
    before(async () => {
      sinon.stub(connection, 'execute').resolves(moviesMock);
    });


    after(() => {
      connection.execute.restore();
    });

    it('retorna um objeto', async () => {
      const movie = await MoviesModel.getById(1);

      expect(movie).to.be.an('object');
    });

    it('tais itens possuem os atributos "id", "title", "directedBy", "releaseYear"', async () => {
      const movie = await MoviesModel.getById(1);

      expect(movie).to.include.all.keys(['id', 'title', 'directedBy', 'releaseYear']);
    });

    it('o filme cadastrado está na lista', async () => {
      const { id, title, directedBy, releaseYear }= await MoviesModel.getById(1);

      expect({ id, title, directedBy, releaseYear }).to.deep.equal(expectedMovie);
    });
  });
});
