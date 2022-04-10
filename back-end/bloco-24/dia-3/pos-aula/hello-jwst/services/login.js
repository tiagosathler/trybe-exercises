const model = require('../models');

module.exports = async ({ username, password }) => {
  const users = await model.readFile();

  const foundUser = users.find((user) => user.username === username && user.password === password);

  if (!foundUser) return false;

  return foundUser;
};