const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors(), bodyParser.json());

app.all('/*', (_req, res, _next) => {
  res.status(404).json({ message: 'invalid endpoint' });
});

app.listen(3001, () => {
  console.log('aplicação rodando na porta 3001');
});