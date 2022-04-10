const validator = require('validator');

module.exports = (req, res, next) => {
  const { body: { email } } = req;
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'invalid data' });
  }
  next();
};