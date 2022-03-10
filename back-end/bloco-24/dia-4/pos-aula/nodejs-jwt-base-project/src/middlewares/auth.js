require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_KEY } = process.env;

if (!JWT_KEY) {
  const error = Error;
  error.message = 'JWT_KEY não foi definido no .env';
  throw error;
}

const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;

    if (!token) return res.status(400).json({ message: 'Token não encontrado ou informado ' });

    const { username } = jwt.verify(token, JWT_KEY);

    const user = await User.findOne({ where: { username } });

    if (!username || !user) throw Error;

    req.user = { username };

    next();
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      message: 'Erro ao acessar o endpoint',
      error: 'É necessário um token válido para acessar esse endpoint',
    });
  }
};
