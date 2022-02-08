const {
  validadeBodyMd,
  validadeEmailMd,
  validadeFirstnameMd,
  validadePasswordMd,
  validadePhoneMd,
  generateToken,
} = require('./middlewares/index');

const signup = (app) => {
  app
    .post('/signup',
      validadeBodyMd,
      validadeEmailMd,
      validadeFirstnameMd,
      validadePasswordMd,
      validadePhoneMd,
      generateToken);
};

module.exports = {
  signup,
};