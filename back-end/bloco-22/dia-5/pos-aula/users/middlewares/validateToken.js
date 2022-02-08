module.exports = (req, res, next) => {
  const { headers: { token } } = req;
  if (token.length !== 12) return res.status(401).json({ message: 'invalid token' });
  next();
};