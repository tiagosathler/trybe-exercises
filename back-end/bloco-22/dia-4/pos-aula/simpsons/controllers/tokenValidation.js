module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === undefined) return res.status(401).json({ message: 'Token is required' });
  if (token.length !== 16) return res.status(401).json({ message: 'Token is invalid' });
  next();
};