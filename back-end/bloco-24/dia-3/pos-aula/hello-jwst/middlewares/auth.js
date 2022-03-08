const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
require('dotenv').config();

const { auth } = require('../schemas');

const secret = process.env.SECRET_PHRASE || 'minhafrasesupersecreta12345';

module.exports = rescue(async (req, res, next) => {
  const { headers: { authorization: token } } = req;

  const validated = auth.validate({ token });

  if (validated.error) return next(validated.error);

  const decoded = jwt.verify(token, secret);

  const { data: { username, admin } } = decoded;

  req.user = { username, admin };
  next();
});