const { User } = require('../models');

const { generateToken } = require('../utils/auth');

module.exports = async (req, res) => {
  try {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });

  if (!user || user.password !== password)
    return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

  console.log(user.dataValues);

  const token = generateToken({ username });

   /* Por fim, nós devolvemos essa informação ao usuário. */
   res.status(200).json({ token });

  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
