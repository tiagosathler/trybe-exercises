const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors(), bodyParser.json());

app.all('/*', (_req, res, _next) => {
  res.status(404).json({ message: 'endpoint not found ' });
});

app.listen(PORT, () => {
  console.log('aplicação ouvindo na porta %i', PORT);
});
