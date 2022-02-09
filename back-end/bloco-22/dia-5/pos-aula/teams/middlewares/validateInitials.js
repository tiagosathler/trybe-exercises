const validator = require('validator');

module.exports = (req, res, next) => {
  const { body: { initials } } = req;
  if (!initials || initials.length < 4 || !validator.isUppercase(initials)) {
    return next({ statusCode: 400, message: 'invalid data - initials' });
  }
  next();
};