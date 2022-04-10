// services/AuthorsSvc.js

const AuthorsMod = require('../models/AuthorsMod');

const Validations = require('../schemas/Validations');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const getAll = async () => {
  const authors = await AuthorsMod.getAll();

  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  const author = await AuthorsMod.findById(id);

  if (!author) {
    return {
      error: {
        code: 404,
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }

  return getNewAuthor(author);
};

const createAuthor = async (firstName, middleName, lastName) => {
  const isValidAuthor = Validations.isValidName(firstName, middleName, lastName);

  if (!isValidAuthor) return false;

  const existingAuthor = await AuthorsMod.findByName(firstName, middleName, lastName);
    
  if (existingAuthor) {
    return {
      error: {
        code: 400,
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }

  const author = await AuthorsMod.createAuthor(firstName, middleName, lastName);
  
  const authorId = author.insertId;

  return getNewAuthor({
    id: authorId,
    firstName,
    middleName,
    lastName,
  });
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
