const {
  // validadeBody,
  // validadeEmail,
  // validadeFirstname,
  // validadePassword,
  validadePhone,
} = require('../../services/login');

module.exports = (req, res, next) => {
  const { phone } = req.body;
  const { response, message } = validadePhone(phone);
  if (!response) return res.status(401).json({ message });
  next();
};