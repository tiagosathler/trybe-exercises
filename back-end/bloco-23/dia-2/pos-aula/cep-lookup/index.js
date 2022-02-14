const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const { config } = require('dotenv');

config();

const app = express();

const { env: { PORT } } = process; 

app.use(bodyParser.json(), cors());

app.use('/*', (_req, res) => {
  res.status(404).json({ message: 'endpoint not found ' });
});

app.listen(PORT, () => {
  console.log('CEP LOOKUP online listen on %s PORT', PORT);
});