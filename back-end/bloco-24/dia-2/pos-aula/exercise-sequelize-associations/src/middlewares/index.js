const handleEndpointNotFound = (req, _res, next) => {
  const { originalUrl } = req;
  return next({ code: 404, message: `endpoint ${originalUrl} doesn't exist` });
};
const handleErrors = (err, _req, res, _next) => {
  console.log(err);
  if (err.code) return res.status(err.code).json({ message: err.message });
  return res.status(500).json({ message: 'internal error', error: err.message });
};

module.exports = {
  handleErrors,
  handleEndpointNotFound,
};