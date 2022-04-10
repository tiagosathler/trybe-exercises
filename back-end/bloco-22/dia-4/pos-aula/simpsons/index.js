const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { jokes } = require('./controllers/jokes');
const { simpsons } = require('./controllers/simpsonsControl');
const { signup } = require('./controllers/signup');
const tokenValidation = require('./controllers/tokenValidation');

const app = express();

app.use(cors(), bodyParser.json());

signup(app);

app.use(tokenValidation);
jokes(app);
simpsons(app);

app.listen(3001, () => {
  console.log('Trabalhando e ouvindo na porta 3001!');
});