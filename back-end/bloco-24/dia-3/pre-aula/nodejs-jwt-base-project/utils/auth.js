const jwt = require('jsonwebtoken');
require('dotenv').config();

//   Aqui é quando assinamos de fato nossa mensagem com a nossa "chave secreta".
const SECRET = process.env.SECRET || 'minhasupersecretphrase';

/* Criamos uma config básica para o nosso JWT, onde:
    expiresIn -> significa o tempo pelo qual esse token será válido;
    algorithm -> algoritmo que você usará para assinar sua mensagem
    (lembra que falamos do HMAC-SHA256 lá no começo?). */
/* A propriedade expiresIn aceita o tempo de forma bem descritiva. Por exemplo: '7d' = 7 dias. '8h' = 8 horas. */

const JWT_CONFIG = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (user) => {
// Dados do seu usuário e/ou demais dados que você (não ponha password)
// quiser colocar dentro de "payload".
/* O resultado dessa função será equivalente a algo como: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6Iml0YWxzc29kaiIsInBhc3N3b3JkIjoic2VuaGExMjMifSwiaWF0IjoxNjM4OTc1MTMyLCJleHAiOjE2Mzk1Nzk5MzJ9.hnpmu2p61Il8wdQfmUiJ7wiWXgw8UuioOU_D2RnB9kY
*/
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