const model = require('../models');

module.exports = async ({ username, password }) => {
  const users = await model.readFile();

  if (users.some((user) => user.username === username)) return false;

  const random = Math.floor(Math.random() * 100);

  let admin = false;
  if (random > 50) admin = true;

  const result = await model.writeFile({ username, password, admin });

  if (!result) return null;

  return { username, password, admin };
};