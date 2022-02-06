const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { jokes } = require('./controllers/jokes');
const { simpsons } = require('./controllers/simpsonsControl');

const app = express();

app.use(cors(), bodyParser.json());

jokes(app);
simpsons(app);

app.listen(3001, () => {
  console.log('Trabalhando e ouvindo na porta 3001!');
});