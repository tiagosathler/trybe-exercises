const { User } = require('../models');

module.exports = async (req, res, _next) => {
  try {
    const { params: { userId }, user: { username } } = req;
    const user = await User.findByPk(userId);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    if (user.username !== username) {
      return res.status(401).json({ message: 'Acesso negado' });
    }

    return res.status(200).json({ id: user.id, username: user.username });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'algo deu ruim', error: error.message });
  }
};
