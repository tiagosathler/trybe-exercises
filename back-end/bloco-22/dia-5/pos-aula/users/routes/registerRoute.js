const express = require('express');
const {
  validateName,
  validateEmail,
  validatePassword,
  createUser,
} = require('../middlewares');

const router = express.Router();

router.use(validateName, validateEmail, validatePassword);

router.post('/register', createUser);

module.exports = router;