const connection = require('./connection');

const serealize = ((obj) => ({
    bookId: obj.id,
    title: obj.title,
    authorId: obj.author_id,
  })
);

const getAll = async () => {
  const [rows] = await connection.execute('SELECT id, title, author_id FROM books');
  
  return rows.map(serealize);
};

module.exports = {
  getAll,
};