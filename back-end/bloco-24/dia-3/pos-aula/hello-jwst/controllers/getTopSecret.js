const rescue = require('express-rescue');

module.exports = rescue(async (req, res, next) => {
  const { user: { admin } } = req;

  if (!admin) return next({ statusCode: 403, message: 'Restricted access' });

  return res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
});