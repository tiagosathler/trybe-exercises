const AuthorsSvc = require('../services/AuthorsSvc');

const getAll = async (_req, res) => {
  const authors = await AuthorsSvc.getAll();

  res.status(200).json(authors);
};

const findById = async (req, res, next) => {
  const { id } = req.params;

  const author = await AuthorsSvc.findById(id);

  if (author.error) return next(author.error);

  res.status(200).json(author);
};

const create = async (req, res, next) => {
  const { firstName, middleName, lastName } = req.body;

  const author = await AuthorsSvc.createAuthor(firstName, middleName, lastName);

  if (author.error) return next(author.error);

  res.status(201).json(author);
};

module.exports = {
  getAll,
  findById,
  create,
};
