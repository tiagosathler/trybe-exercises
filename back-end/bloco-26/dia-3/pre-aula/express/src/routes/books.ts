import { Router } from 'express';
import BooksController from '../controllers/Books';
import validationBook from '../middlewares/Books';

const Books = Router();

const booksController = new BooksController();

Books
  .get('/', booksController.getAll)
  .get('/:id', booksController.getById)
  .post('/', validationBook, booksController.create)
  .put('/:id', validationBook, booksController.update)
  .delete('/:id', booksController.remove);

export default Books;