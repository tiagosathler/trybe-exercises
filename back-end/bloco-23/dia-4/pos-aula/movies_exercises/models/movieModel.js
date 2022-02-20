const connection = require('./connection');

const serialize = ({ id, title, directed_by: directedBy, release_year: releaseYear }) => ({
  id,
  title,
  directedBy,
  releaseYear,
});

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM movies_exercises.movies');
  const movies = rows.map(serialize);

  return movies;
};

const getById = async (id) => {
  const query = 'SELECT * FROM movies_exercises.movies WHERE id = ?';
  const params = [id];
  const [rows] = await connection.execute(query, params);

  const movie = rows.map(serialize)[0];

  return movie;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const query = `INSERT INTO movies_exercises.movies
  (title, directed_by, release_year)
  VALUES (?, ?, ?)`;
  const params = [title, directedBy, releaseYear];
  const [{ insertId: id }] = await connection.execute(query, params);
  
  return {
    id,
    title,
    directedBy,
    releaseYear,
  };
};

module.exports = {
  create,
  getAll,
  getById,
};
