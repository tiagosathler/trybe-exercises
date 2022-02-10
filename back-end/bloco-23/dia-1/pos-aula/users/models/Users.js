const connection = require('./connection');

const serialize = (obj) => ({
  userId: obj.id,
  firstName: obj.first_name,
  lastName: obj.last_name,
  email: obj.email,
});

const createUser = async ({ firstName, lastName, email, password }) => {
  try {
    const query = 'INSERT INTO model_example.users '
      + '(first_name, last_name, email, password) '
      + 'VALUES (?, ?, ?, ?);';
    const [rows] = await connection.execute(query, [firstName, lastName, email, password]);
    return rows;
  } catch (e) {
    console.log('MySQL error createUser: ', e.message);
    return { err: { statusCode: 500, message: 'internal error - creating user in the database' } };
  }
};

const getAllUsers = async () => {
  try {
    const query = 'SELECT id, first_name, last_name, email FROM users;';
    const [rows] = await connection.execute(query);
    return rows.map(serialize);
  } catch (e) {
    console.log('MySQL error getAllUsers: ', e.message);
    return { err: { statusCode: 500, message: 'internal error - reading users in the database' } };
  }
};

const getUserById = async (id) => {
  try {
    const query = 'SELECT id, first_name, last_name, email FROM users WHERE id = ?;';
    const [row] = await connection.execute(query, [id]);
    return row.map(serialize);
  } catch (e) {
    console.log('MySQL error getAllUsers: ', e.message);
    return { err: { statusCode: 500, message: 'internal error - reading users in the database' } };
  }
};

const updateUser = async ({ id, firstName, lastName, email, password }) => {
  try {
    const query = 'UPDATE users '
    + 'SET first_name = ?, last_name = ?, email = ?, password = ? '
    + 'WHERE id = ?;';
    const [row] = await connection.execute(query, [firstName, lastName, email, password, id]);
    return row;
  } catch (e) {
    console.log('MySQL error updateUser: ', e.message);
    return { err: { statusCode: 500, message: 'internal error - update user in the database' } };
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
};