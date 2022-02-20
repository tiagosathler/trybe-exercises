const { Router } = require('express');
const { Book } = require('../models');

const BooksRoute = Router();

BooksRoute
  .get('/', async (_req, res) => {
    try {
      const books = await Book.findAll();
      return res.status(200).json(books);
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ message: e.message });
    }
  });

module.exports = BooksRoute;