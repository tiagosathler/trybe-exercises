const router = require('express').Router();

const Middlewares = require('../middlewares');

router.get('/',
Middlewares.getAllUsers);

router.get('/:id',
  Middlewares.idValidate,
  Middlewares.checkUserId,
  Middlewares.getUserById);

router.use(
  Middlewares.nameValidate,
  Middlewares.emailValidate,
  Middlewares.passwordValidate,
);

router.post('/',
  Middlewares.createUser);

router.put('/:id',
  Middlewares.idValidate,
  Middlewares.checkUserId,
  Middlewares.updateUser);

module.exports = router;
