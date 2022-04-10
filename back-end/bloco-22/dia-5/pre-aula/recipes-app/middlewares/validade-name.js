const validadeName = (req, res, next) => {
  const { body: name } = req;
  if (name === undefined || name === '') {
    return res.status(400).json({ message: 'Invalid name!' });
  }
  next();
};

module.exports = validadeName;