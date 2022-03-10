const { User } = require('../models');

module.exports = async (_req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password']}});

    if (!users) throw Error;

    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar usuários no banco', error: err.message });
  }
};
