const { expect } = require('chai');
const sinon = require('sinon');

const MoviesService = require('../../services/movieService');
const MoviesModel = require('../../models/movieModel');

const expectedMovie = {
  id: 1,
  title: 'Example Movie',
  directedBy: 'Jane Dow',
  releaseYear: 1999,
};

describe.only('Busca um filme pelo id', () => {
  
  describe('Quando não encontra o filme', () => {

    before(async () => {
      sinon.stub(MoviesModel, 'getById').resolves(undefined);
    });


    after(() => {
      MoviesModel.getById.restore();
    });
        
    it('retorna undefined', async () => {
      const movies = await MoviesService.getById(3);

      expect(movies).to.be.undefined;
    });

    
  });

  describe('Quando encontra o filme cadastrado', () => {
    before(async () => {
      sinon.stub(MoviesModel, 'getById').resolves(expectedMovie);
    });


    after(() => {
      MoviesModel.getById.restore();
    });

    it('retorna um objeto', async () => {
      const movie = await MoviesService.getById(1);

      expect(movie).to.be.an('object');
    });

    it('tais itens possuem os atributos "id", "title", "directedBy", "releaseYear"', async () => {
      const movie = await MoviesService.getById(1);

      expect(movie).to.include.all.keys(['id', 'title', 'directedBy', 'releaseYear']);
    });

    it('o filme cadastrado está na lista', async () => {
      const { id, title, directedBy, releaseYear }= await MoviesService.getById(1);

      expect({ id, title, directedBy, releaseYear }).to.deep.equal(expectedMovie);
    });
  });
});
