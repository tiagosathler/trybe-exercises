const AuthorsSvc = require('../services/AuthorsSvc');
const AuthorsMod = require('../models/AuthorsMod');

const getAll = async (_req, res) => {
  const authors = await AuthorsMod.getAll();

  res.status(200).json(authors);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const author = await AuthorsMod.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
};

const create = async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  console.log(firstName, middleName, lastName);
  
  const author = await AuthorsSvc.createAuthor(firstName, middleName, lastName);

  if (!author) return res.status(400).json({ message: 'Dados inválidos' });

  res.status(201).json(author);
};

module.exports = {
  getAll,
  findById,
  create,
};
