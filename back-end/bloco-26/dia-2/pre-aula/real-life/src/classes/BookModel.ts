import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';

export type TBook = {
  id?: number,
  title: string,
  price: number,
  author: string,
  isbn: string,
};

export interface IBookModel {
  getBooks: () => Promise<TBook[]>;
  addBook: (book: TBook) => Promise<TBook>;
}

export class BookModel implements IBookModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getBooks(): Promise<TBook[]> {
    const result = await this.connection.execute<RowDataPacket[]>('SELECT * FROM books');
    const [rows] = result;
    return rows as TBook[];
  }

  public async addBook(book: TBook): Promise<TBook> {
    const { title, price, author, isbn } = book;
    const query: string = `INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)`;
    const params: any[] = [title, price, author, isbn];
    const [result] = await this.connection.execute<ResultSetHeader>(query, params);
    const { insertId } = result;
    return { id: insertId, title, price, author, isbn };
  }
}