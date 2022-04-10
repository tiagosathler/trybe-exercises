const validateName = require('./validateName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const createUser = require('./createUser');
const createToken = require('./createToken');
const validateToken = require('./validateToken');
const getPrice = require('./getPrice');

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
  createUser,
  createToken,
  validateToken,
  getPrice,
};