const connection = require('./connection');

const serealize = ((obj) => ({
    bookId: obj.id,
    title: obj.title,
    authorId: obj.author_id,
  })
);

const getAll = async () => {
  try {
    const [rows] = await connection
      .execute('SELECT id, title, author_id FROM books');
  
    if (rows.length === 0) return null;
    
    return rows.map(serealize);
  } catch (err) {
    console.log('MySQL select: ', err.message);
    return { err };
  }
};

const getByAuhorId = async (id) => {
  try {
    const [rows] = await connection
      .execute('SELECT id, title, author_id FROM books WHERE id = ?', [id]);
  
    if (rows.length === 0) return null;
    return rows.map(serealize);
  } catch (err) {
    console.log('MySQL select: ', err.message);
    return { err };
  }
};

const createBook = async ({ authorId, title }) => {
  try {
    const query = 'INSERT INTO model_example.books'
      + '(title, author_id) VALUES (?, ?)';
    const [rows] = await connection.execute(query, [title, authorId]);
    return rows;
  } catch (err) {
    console.log('MySQL insert: ', err.message);
    return { err };
  }
};

module.exports = {
  getAll,
  getByAuhorId,
  createBook,
};