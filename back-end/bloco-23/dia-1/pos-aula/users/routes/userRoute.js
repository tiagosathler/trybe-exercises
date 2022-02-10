const router = require('express').Router();

const Middlewares = require('../middlewares');

router.post('/',
  Middlewares.nameValidate,
  Middlewares.emailValidate,
  Middlewares.passwordValidate,
  Middlewares.createUser);

module.exports = router;