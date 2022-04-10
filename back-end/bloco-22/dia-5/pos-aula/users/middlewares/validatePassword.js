module.exports = (req, res, next) => {
  const { body: { password } } = req;
  if (Number.isNaN(Number(password)) || password.length < 4 || password.length > 8) {
    return res.status(400).json({ message: 'invalid data' });
  }
  next();
};