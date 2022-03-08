const Joi = require('joi');

const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(5)
    .required()
    .messages({
      'any.required': 'username is required',
      'string.min': 'username must be at least 5 characters',
      'string.alphanum': 'the username must be an alphanumeric type',
    }),
  password: Joi.string()
    .min(5)
    .required()
    .messages({
      'any.required': 'password is required',
      'string.min': 'password must be at least 5 characters',
    }),
});

module.exports = schema;