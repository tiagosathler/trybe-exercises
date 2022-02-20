const MovieService = require('../services/movieService');

const getAll = async (_req, res) => {
  const movies = await MovieService
    .getAll();

  res.status(200).json(movies);
};

const getById = async (req, res) => {
  const { params: { id } } = req;
  const movie = await MovieService.getById(+id);

  if (movie === undefined) return res.status(404).json({ message: 'Filme não encontrado' });

  return res.status(200).json(movie);
};

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MovieService
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400)
      .json({ message: 'Dados inválidos' });
  }

  res.status(201)
    .json({ message: 'Filme criado com sucesso!' });
};

module.exports = {
  getAll,
  create,
  getById,
};
