const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const registerRoute = require('./routes/registerRoute');
const btcRoute = require('./routes/btcRoute');
const postRoute = require('./routes/postRoute');

const app = express();

app.use(cors(), bodyParser.json());

app.use('/user', registerRoute);

app.use('/btc', btcRoute);

app.use('/posts', postRoute);

app.all('/*', (req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.use((err, _req, res, _next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({ message: err.message });
});

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001!');
});