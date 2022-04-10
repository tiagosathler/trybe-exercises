const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [{ id }, created] = await User.findOrCreate({
        where: { username },
        defaults: { 
          username,
          password,
        },
    });

    if (!created) return res.status(409).json({ message: 'username already exists', user: {id, username}});

    res.status(201).json({ message: 'Novo usuário criado com sucesso', user: {id, username} });

  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
};
