const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Author = require('./models/Author');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors(), bodyParser.json());

app.get('/authors',
  async (req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
  },
);

app.listen(PORT, () => {
  console.log(`ouvindo na porta ${PORT}`);
});