const emailValidator = require('email-validator');
const validator = require('validator');
const PasswordValidator = require('password-validator');

const schema = new PasswordValidator();

schema
  .is().min(8)
  .is().max(20);  

const validadeBody = ({ email, password, firstname, phone }) => {
  if (email === undefined
    || password === undefined
    || firstname === undefined
    || phone === undefined) {
      return {
        response: false,
        message: '\'body\' content is required in the requisition\'',
      };   
  }
  return { response: true };
};

const validadeEmail = (email) => {
  if (!emailValidator.validate(email)) {
    return {
      response: false,
      message: '\'email\' isn\'t valid!',
    }; 
  }
  return { response: true };
};

const validadePassword = (password) => {
  if (!schema.validate(password)) {
    return {
      response: false,
      message: '\'password\' isn\'t valid!',
    }; 
} 
  return { response: true };
};

const validadeFirstname = (firstname) => {
  if (!validator.isAlpha(firstname, 'pt-BR')) {
    return {
      response: false,
      message: '\'firstname\' isn\'t valid!',
    }; 
} 
  return { response: true };
};

const validadePhone = (phone) => {
  if (!validator.isMobilePhone(phone, 'pt-BR')) {
    return {
      response: false,
      message: '\'phone\' isn\'t valid!',
    }; 
} 
  return { response: true };
};

module.exports = {
  validadeBody,
  validadeEmail,
  validadePassword,
  validadeFirstname,
  validadePhone,
};