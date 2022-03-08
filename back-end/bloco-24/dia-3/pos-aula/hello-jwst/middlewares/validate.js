const schema = require('../schemas');

module.exports = (req, _res, next) => {
  const { body: { username, password } } = req;

  const validated = schema.validate({ username, password });

  if (validated.error) return next(validated.error);

  next();
};