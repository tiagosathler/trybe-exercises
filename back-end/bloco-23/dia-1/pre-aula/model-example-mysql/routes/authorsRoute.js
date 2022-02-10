const router = require('express').Router();

const Author = require('../models/Author');

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

module.exports = router;