import { Request, Response, NextFunction } from 'express';
import { ResultSetHeader } from 'mysql2';
import { BookModel, IBookModel, TBook } from '../classes/BookModel';
import connection from '../models/connection';

const insertBook = async (req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | void> => {
  try {
    const { title, author, isbn, price } = req.body;
    const bookModel: IBookModel = new BookModel(connection);
    const book: TBook = await bookModel.addBook({ title, author, isbn, price });

    // const query: string = `INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)`;
    // const params: string[] = [title, price, author, isbn];
    // const [result] = await connection.execute<ResultSetHeader>(query, params);
    // const { insertId } = result;
    return res.status(201).json({ book });
  } catch (err) {
    return next(err);
  }
}

export default insertBook;