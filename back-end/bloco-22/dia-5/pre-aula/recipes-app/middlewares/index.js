const authMiddleware = require('./auth-middleware');
const validadeName = require('./validade-name');
const validadePrice = require('./validade-price');
const errorLog = require('./error-log');

module.exports = {
  authMiddleware,
  validadeName,
  validadePrice,
  errorLog,
};
