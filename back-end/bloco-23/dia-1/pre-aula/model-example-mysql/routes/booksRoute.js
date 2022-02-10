const router = require('express').Router();

const Book = require('../models/Book');

router.get('/', async (_req, res, next) => {
  const books = await Book.getAll();
  
  if (!books) {
    return next({ statusCode: 404, message: 'books not found' });
  }

  if (books.err) {
    next({ statusCode: 500, message: 'internal error accessing the database' });
  }
  
  res.status(200).json(books);
});

router.get('/:id', async (req, res, next) => {
  const { params: { id } } = req;

  const books = await Book.getByAuhorId(id);

  if (!books) {
    return next({ statusCode: 404, message: 'books not found' });
  }

  if (books.err) {
    next({ statusCode: 500, message: 'internal error accessing the database' });
  }
  
  res.status(200).json(books);
});

module.exports = router;