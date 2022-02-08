const validadeBodyMd = require('./validadeBodyMd');
const validadeEmailMd = require('./validadeEmailMd');
const validadeFirstnameMd = require('./validadeFirstnameMd');
const validadePasswordMd = require('./validadePasswordMd');
const validadePhoneMd = require('./validadePhoneMd');
const generateToken = require('./generateToken');

module.exports = {
  validadeBodyMd,
  validadeEmailMd,
  validadePasswordMd,
  validadeFirstnameMd,
  validadePhoneMd,
  generateToken,
};
