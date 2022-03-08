const rescue = require('express-rescue');

module.exports = rescue(async (req, res, _next) => {
  const { user: { username, admin } } = req;

  return res.status(200).json({ username, admin });
});