const router = require('express').Router();

const Book = require('../models/Book');
const Author = require('../models/Author');

const isValid = ({ authorId, title }) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (Number.isNaN(Number(authorId))) return false;
  return true;
};

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

router.post('/:authorId',
/* eslint complexity: ["error", 10] */
async (req, res, next) => {
    const { params: { authorId }, body: { title } } = req;
    if (!isValid({ authorId, title })) {
      return next({ statusCode: 400, message: 'invalid title body or id params' });
    }
    const author = await Author.getById(authorId);
    if (!author) {
      return next({ statusCode: 400, message: 'invalid authorId (does\'nt exist)' });
    }
    if (author.err) {
      return next({ statusCode: 500, message: 'internal error acessing the database' });
    }
    const book = await Book.createBook({ authorId, title });    
    if (book.err) {
      next({ statusCode: 500, message: 'internal error on create data in the database' });
    }
    res.status(201).json({ message: 'book insert into the database' });
});

module.exports = router;