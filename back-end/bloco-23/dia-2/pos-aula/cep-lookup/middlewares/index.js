const codes = {
  invalidData: 400,
  notFound: 404,
  alreadyExists: 409,
  failedCreate: 500,
};

const endpointNotFound = (_req, res) => {
  res.status(404).json({ message: 'endpoint not found ' });
};

const pingPong = (_req, res) => {
  res.status(200).json({ message: 'pong' });
};

const handleErrors = ({ error }, _req, res, _next) => {
  if (error.code) {
    return res.status(codes[error.code]).json(error);
  }
  res.status(500).json({ message: 'internal error' });
};

module.exports = {
  endpointNotFound,
  pingPong,
  handleErrors,
};