const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const Routes = require('./routes');

const app = express();

app.use(cors(), bodyParser.json());

app.use('/authors', Routes.authors);
app.use('/books', Routes.books);

app.use((err, _req, res, _next) => {
  if (err.statusCode) return res.status(err.statusCode).json({ message: err.message });
  return res.status(500).json({ message: 'internal error' });
});

app.all('/*', (_req, res) => {
  res.status(404).json({ message: 'endpoint not found ' });
});

app.listen(PORT, () => {
  console.log(`ouvindo na porta ${PORT}`);
});