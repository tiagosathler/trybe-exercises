const validator = require('validator');
const { query } = require('what-country');

module.exports = (req, res, next) => {
  const { body: { country } } = req;
  if (!country || country.length < 4 || !validator.isAlpha(country, 'en-US')) {
    return next({ statusCode: 400, message: 'invalid data - country' });
  }
  const search = query('country');
  if(search.length === 0) {
    return next({ statusCode: })
  }
  next();
};