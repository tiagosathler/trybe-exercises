const {
  // validadeBody,
  // validadeEmail,
  validadeFirstname,
  // validadePassword,
  // validadePhone,
} = require('../../services/login');

module.exports = (req, res, next) => {
  const { firstname } = req.body;
  const { response, message } = validadeFirstname(firstname);
  if (!response) return res.status(401).json({ message });
  next();
};