const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const serialeze = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  });

const getAll = async () => {
  try {
    const [rows] = await connection
      .execute('SELECT id, first_name, last_name, middle_name, last_name FROM authors;');
    return rows.map(serialeze).map(getNewAuthor);  
  } catch (err) {
    console.log('MySQL: ', err.message);
    return { err };
  }
};

const getById = async (id) => {
  try {
    const query = 'SELECT id, first_name, last_name, middle_name, last_name '
    + 'FROM authors WHERE id = ?;';
    const [rows] = await connection.execute(query, [id]);
    if (rows.length === 0) return null;
    return rows.map(serialeze).map(getNewAuthor)[0];
  } catch (err) {
    console.log('MySQL select: ', err.message);
    return { err };
  }
};

const createAuthor = async (
  { firstName,
    middleName = null,
    lastName,
    birthDay = null,
    nationality = null }) => {
    try {
      const query = 'INSERT INTO model_example.authors'
       + '(first_name, middle_name, last_name, birthday, nationality) VALUES (?, ?, ?, ?, ?);';
      const [rows, fields] = await connection
        .execute(query, [firstName, middleName, lastName, birthDay, nationality]);
      console.log(rows, fields);
      return rows;
    } catch (err) {
      console.log('MySQL error: ', err.message);
      return { err };
    }
};

module.exports = {
  getAll,
  getById,
  createAuthor,
};