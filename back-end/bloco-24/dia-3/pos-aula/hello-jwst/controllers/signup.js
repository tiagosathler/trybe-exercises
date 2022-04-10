const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const service = require('../services');

const secret = process.env.SECRET_PHRASE || 'minhafrasesupersecreta12345';

// module.exports = rescue(async (req, res, next) => {
//   const { body: { username, password } } = req;

//   const user = await service.login({ username, password });

//   if (!user) return next({ statusCode: 401, message: 'invalid username or password' });

//   let { admin } = user;

//   if (password === 's3nh4S3gur4???') admin = true;

//   const jwtConfig = {
//     expiresIn: '1h',
//     algorithm: 'HS256',
//   };

//   const token = jwt.sign({ data: { username, admin } }, secret, jwtConfig);

//   return res.status(200).json({ token });
// });

module.exports = rescue(async (req, res, next) => {
  const { body: { username, password } } = req;

  const result = await service.signup({ username, password });

  if (result === false) return next({ statusCode: 409, message: 'user already exists' });

  if (result === null) return next({ message: 'fails on write file' });

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const { admin } = result;

  const token = jwt.sign({ data: { username, admin } }, secret, jwtConfig);

  return res.status(200).json({ token });
});