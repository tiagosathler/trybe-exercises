const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
require('dotenv').config();

const secret = process.env.SECRET_PHRASE || 'minhafrasesupersecreta12345';

module.exports = rescue(async (req, res, _next) => {
  const { body: { username, password } } = req;

  let admin = false;
  if (password === 's3nh4S3gur4???') admin = true;

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { username, admin } }, secret, jwtConfig);

  return res.status(200).json({ token });
});