const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET || 'minhasupersecretphrase';
const JWT_CONFIG = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (user) => {
  const token = jwt.sign({ payload: user }, SECRET, JWT_CONFIG);
  return token;
};


const validateToken = (token) => {
  try {
    const { payload } = jwt.verify(token, SECRET);
    if (!payload) return { isValid: false, message: 'Wrong token' };
    return { isValid: true, payload };
  } catch (error) {
    console.error(error);
    return { isValid: false, message: 'Invalid Token' };
  }
};

module.exports = {
  generateToken,
  validateToken,
}