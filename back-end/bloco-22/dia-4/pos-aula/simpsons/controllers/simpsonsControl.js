const {
  readSimpsons,
  writeSimpsons,
} = require('../models/simpsonsModel');

/* eslint max-lines-per-function: ["error", 50] */
const simpsons = (app) => {
  app
    .route('/simpsons')
    .get(async (req, res) => {
      const result = await readSimpsons();
      if (!result.response) return res.status(500).json(result.message);
      if (result.content.length === 0) return res.status(204).json(result.content);
      res.status(200).json(result.content);
    })
    /* eslint complexity: ["error", 15] */
    .post(async (req, res) => {
      const { id, name } = req.body;
      if (name === undefined || id === undefined) {
        return res.status(400)
          .json({ message: '\'id\' and \'name\' are required' }); 
      }
      let result = await readSimpsons();
      if (!result.response) {
        return res.status(500).json(result.message);
      }
      const { content } = result;
      const index = content
        .findIndex(({ name: simpson, id: simpsonId }) => 
          simpson.toLowerCase().includes(name.toLowerCase())
          || simpsonId === +id);
      if (index >= 0) {
        return res.status(409)
          .json({ message: '\'id\' or \'name\' already exists\'' });
      }
      content.push({ id, name });
      result = await writeSimpsons(content);
      if (!result.response) {
        return res.status(500).json(result.message);
      }
      res.status(204).end();
    });
  
  app.get('/simpsons/:id', async (req, res) => {
    const { id } = req.params;
    const result = await readSimpsons();
    if (!result.response) {
      return res.status(500).json(result.message);
    }
    const { content } = result;
    const found = content
      .find(({ id: simpsonId }) => simpsonId === +id);
    if (found === undefined) return res.status(404).json({ message: 'simpson not found' });
    res.status(200).json(found);
  });
};

module.exports = { simpsons };