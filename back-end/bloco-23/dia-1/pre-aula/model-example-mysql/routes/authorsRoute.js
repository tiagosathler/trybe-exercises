const router = require('express').Router();

const Author = require('../models/Author');

/* eslint complexity: ["error", 7] */
const isValid = ({ firstName, middleName = undefined, lastName }) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
  return true;
};

router.get('/',
  async (_req, res, next) => {
    const authors = await Author.getAll();
    
    if (!authors) {
      return next({ statusCode: 404, message: 'authors not found' });
    }
    
    if (authors.err) {
      return next({ statusCode: 500, message: 'internal error accessing the database' });
    }

    res.status(200).json(authors);
  });

router.get('/:id',
  async (req, res, next) => {
    const { params: { id } } = req;
    if (Number.isNaN(Number(id))) next({ statusCode: 400, message: 'params is not a number' });
    
    const author = await Author.getById(id);
    
    if (!author) {
      return next({ statusCode: 404, message: 'author not found' });
    }
    
    if (author.err) {
      return next({ statusCode: 500, message: 'internal error accessing the database' });
    }

    res.status(200).json(author);
  });

router.post('/',
  async (req, res, next) => {
    const { body: { firstName, middleName, lastName } } = req;
    if (!isValid({ firstName, lastName, middleName })) {
      return next({ statusCode: 400, message: 'invalid body requisition' });
    }
    const author = await Author.createAuthor({ firstName, middleName, lastName });
    
    if (author.err) {
      return next({ statusCode: 500, message: 'internal error creating date into the database' });
    }

    res.status(201).json({ message: 'author was create' });
  });

module.exports = router;