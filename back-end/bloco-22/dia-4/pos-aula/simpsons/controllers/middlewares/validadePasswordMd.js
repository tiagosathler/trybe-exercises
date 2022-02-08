const {
  // validadeBody,
  // validadeEmail,
  // validadeFirstname,
  validadePassword,
  // validadePhone,
} = require('../../services/login');

module.exports = (req, res, next) => {
  const { password } = req.body;
  const { response, message } = validadePassword(password);
  if (!response) return res.status(401).json({ message });
  next();
};