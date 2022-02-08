const {
  // validadeBody,
  validadeEmail,
  // validadeFirstname,
  // validadePassword,
  // validadePhone,
} = require('../../services/login');

module.exports = (req, res, next) => {
  const { email } = req.body;
  const { response, message } = validadeEmail(email);
  if (!response) return res.status(401).json({ message });
  next();
};