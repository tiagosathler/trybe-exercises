const { validateToken } = require('../utils/auth');

const authToken = (req, res, next) => {
  const { headers: { authorization: token }} = req;

  if(!token) return res.status(400).json({ message: 'token in authorization header is required'});

  const { isValid, message, payload } = validateToken(token);

  if(!isValid) return res.status(401).json({ message });

  req.user = payload;

  next();
};

const validateBody = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

  next();
}

module.exports = {
  authToken,
  validateBody,
}