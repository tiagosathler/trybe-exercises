const MoviesModel = require('../models/movieModel');

const isInvalidString = (value) => (!value || typeof value !== 'string');
const isInvalidYear = (year) => (!year || typeof year !== 'number');

const isValid = (title, directedBy, releaseYear) => {
  switch (true) {
    case isInvalidString(title): return false;
    case isInvalidYear(releaseYear): return false;
    case isInvalidString(directedBy): return false;
    default:
      return true;
  }  
};

const getAll = async () => {
  const moviesData = await MoviesModel.getAll();

  return moviesData;
};

const getById = async (id) => {
  const movieData = await MoviesModel.getById(id);

  return movieData;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

module.exports = {
  create,
  getAll,
  getById,
};
