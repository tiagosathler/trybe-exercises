const handleError = ((err, _req, res, _next) => {
  if (err.code) res.status(err.code).json(err.message);
  res.status(500).json({ message: 'internal error' });
});

module.exports = handleError;