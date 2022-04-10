const express = require('express');

const {
  validateToken,
  getPrice,
} = require('../middlewares');

const router = express.Router();

router.get('/price', validateToken, getPrice);

module.exports = router;