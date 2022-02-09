const router = require('express').Router();

const Book = require('../models/Book');

router.get('/', async (req, res, _next) => {
  const books = await Book.getAll();
  res.status(200).json(books);
});

module.exports = router;