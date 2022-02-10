const validator = require('validator');

const Users = require('../models/Users');

const handleError = (err, _req, res, _next) => {
  if (err.statusCode && err.message) {
    return res.status(err.statusCode).json({ error: true, message: err.message });
  }

  console.log(err);
  
  return res.status(500).json({ error: true, message: 'internal error ' });
};

const validadeId = (req, _res, next) => {
  const { params: { id } } = req;

  if (Number.isNaN(Number(id))) {
    return next({ statusCode: 400, message: 'id is not a number' });
  }

  next();
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

const passwordValidate = (req, _res, next) => {
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
  
  if (user.err) return next(user.err);
  
  res.status(201).json({ id: user.insertId, firstName, lastName, email });
};

const getAllUsers = async (_req, res, next) => {
  const users = await Users.getAllUsers();

  if (users.err) return next(users.err);

  res.status(200).json(users);
};

const checkUserId = async (req, res, next) => {
  const { params: { id } } = req;
  const user = await Users.getUserById(id);
  
  if (user.err) return next(user.err);

  if (user.length === 0) {
    return next({ statusCode: 404, message: 'user not found' });
  }
  req.user = user;
  next();
};

const getUserById = async (req, res, _next) => {
  const { user } = req;

  res.status(200).json(user);
};

const updateUser = async (req, res, next) => {
  const { body: { firstName, lastName, email, password }, params: { id } } = req;

  const user = await Users.updateUser({ id, firstName, lastName, email, password });

  if (user.err) return next(user.err);

  res.status(202).json({ id, firstName, lastName, email, password });
};

module.exports = {
  handleError,
  validadeId,
  nameValidate,
  emailValidate,
  passwordValidate,
  createUser,
  getAllUsers,
  checkUserId,
  getUserById,
  updateUser,
};