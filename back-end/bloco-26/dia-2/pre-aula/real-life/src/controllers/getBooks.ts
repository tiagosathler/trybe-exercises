import { Request, Response, NextFunction } from 'express';
import connection from '../models/connection';
import { BookModel, TBook, IBookModel } from '../classes/BookModel';

const getBooks = async (_req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | void> => {
  try {
    const bookModel: IBookModel = new BookModel(connection);
    const books: TBook[] = await bookModel.getBooks();
    // const [books] = await connection.execute('SELECT * FROM books');
    return res.status(200).json({ books });
  } catch (err) {
    return next(err);
  }
}

export default getBooks;