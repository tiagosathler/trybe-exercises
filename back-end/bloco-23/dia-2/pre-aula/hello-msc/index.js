const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const Authors = require('./routes/Authors');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors(), bodyParser.json());

app.use('/authors', Authors);

app.all('/*', (_req, res, _next) => {
  res.status(404).json({ message: 'endpoint not found ' });
});

app.listen(PORT, () => {
  console.log('API online escutando na porta %s', PORT);
});
