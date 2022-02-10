const handleError = (err, req, res, _next) => {
  if (err.statusCode && err.message) {
    return res.status(err.statusCode).json(err.message);
  }
  res.stauts(500).json({ message: 'internal error ' });
};

module.exports = {
  handleError,
};