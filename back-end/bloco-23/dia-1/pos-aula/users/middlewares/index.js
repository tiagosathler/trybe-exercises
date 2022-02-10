const validator = require('validator');

const Users = require('../models/Users');

const handleError = (err, _req, res, _next) => {
  if (err.statusCode && err.message) {
    return res.status(err.statusCode).json({ error: true, message: err.message });
  }
  console.log(err);
  return res.status(500).json({ error: true, message: 'internal error ' });
};

const nameValidate = (req, _res, next) => {
  const { body: { firstName, lastName } } = req;
  if (!firstName || !lastName) {
    return next({ statusCode: 400, message: 'firstName and lastName are required ' });
  }
  if (!validator.isAlpha(firstName, 'pt-BR') || !validator.isAlpha(lastName, 'pt-BR')) {
    return next({ statusCode: 400, message: 'invalid firstName or lastName' });
  }
  next();
};

const emailValidate = (req, _res, next) => {
  const { body: { email } } = req;
  if (!email) {
    return next({ statusCode: 400, message: 'email is required' });
  }
  if (!validator.isEmail(email)) {
    return next({ statusCode: 400, message: 'invalid email format' });
  }
  next();
};

const passwordValidate = (req, res, next) => {
  const { body: { password } } = req;
  if (!password) {
    return next({ statusCode: 400, message: 'password is required' });
  }
  if (password.length < 6 || typeof password !== 'string') {
    return next({ statusCode: 400, message: 'invalid password format' });
  }
  next();
};

const createUser = async (req, res, next) => {
  const { body: { firstName, lastName, email, password } } = req;
  const user = await Users.createUser({ firstName, lastName, email, password });
  
  if (user.err) {
    return next(user.err);
  }

  res.status(201).json({ id: user.insertId, firstName, lastName, email });
};

module.exports = {
  handleError,
  nameValidate,
  emailValidate,
  passwordValidate,
  createUser,
};