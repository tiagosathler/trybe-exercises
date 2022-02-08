const {
  validadeBody,
  // validadeEmail,
  // validadeFirstname,
  // validadePassword,
  // validadePhone,
} = require('../../services/login');

module.exports = (req, res, next) => {
  const { email, password, firstname, phone } = req.body;
  const { response, message } = validadeBody({ email, password, firstname, phone });
  if (!response) return res.status(401).json({ message });
  next();
};