const connection = require('./connection');

const createUser = async ({ firstName, lastName, email, password }) => {
  try {
    const query = 'INSERT INTO model_example.users '
      + '(first_name, last_name, email, password) '
      + 'VALUES (?, ?, ?, ?);';
    const [rows] = await connection.execute(query, [firstName, lastName, email, password]);
    return rows;
  } catch (e) {
    console.log('MySQL error createUser: ', e.message);
    return { err: { statusCode: 500, message: 'internal error - creating user in the dataabe ' } };
  }
};

module.exports = {
  createUser,
};