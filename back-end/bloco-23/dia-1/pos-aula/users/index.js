const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const Middlewares = require('./middlewares');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors(), bodyParser.json());

app.all('/', (req, res) => {
  res.status(404).json({ message: 'endpoint not found' });
});

app.use(Middlewares.handleError);

app.listen(PORT, () => {
  console.log(`ouvindo na porta ${PORT}`);
});