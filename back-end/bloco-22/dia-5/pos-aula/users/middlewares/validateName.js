module.exports = (req, res, next) => {
  const { body: { username } } = req;
  if (username === undefined || username.length < 3) {
    return res.status(400).json({ message: 'invalid data' });    
  }
  next();
};