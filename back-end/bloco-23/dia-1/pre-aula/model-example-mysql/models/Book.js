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
    console.log('MySQL: ', err.message);
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
    console.log('MySQL: ', err.message);
    return { err };
  }
};

module.exports = {
  getAll,
  getByAuhorId,
};