const endpointNotFound = (_req, res) => {
  res.status(404).json({ message: 'endpoint not found ' });
};

const pingPong = (_req, res) => {
  res.status(200).json({ message: 'pong' });
};

module.exports = {
  endpointNotFound,
  pingPong,
};