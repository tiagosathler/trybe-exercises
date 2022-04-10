const express = require('express');
const {
  validateName,
  validateEmail,
  validatePassword,
  createUser,
  createToken,
} = require('../middlewares');

const router = express.Router();

router.use(validateEmail, validatePassword);

router.post('/register', validateName, createUser);

router.post('/login', createToken);

module.exports = router;