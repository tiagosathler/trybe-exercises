const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const registerRoute = require('./routes/registerRoute');
const btcRoute = require('./routes/btcRoute');

const app = express();

app.use(cors(), bodyParser.json());

app.use('/user', registerRoute);

app.use('/btc', btcRoute);

app.all('/*', (req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.use((err, _req, res, _next) => {
  if (err.status && err.code) {
    return res.status(err.status).json({ code: err.code, message: err.message });
  }
  return res.status(500).json({ message: err.message });
});

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001!');
});