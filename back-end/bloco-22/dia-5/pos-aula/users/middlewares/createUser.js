module.exports = (req, res, _next) => {
  res.status(201).json({ message: 'user created' });
};