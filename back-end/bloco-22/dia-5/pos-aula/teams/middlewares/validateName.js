const validator = require('validator');

module.exports = (req, _res, next) => {
  const { body: { name } } = req;
  if (!name || name.length <= 5 || !validator.isAlpha(name, 'pt-BR')) { 
    return next({ statusCode: 400, message: 'invalid data' });
  }
  next();
};