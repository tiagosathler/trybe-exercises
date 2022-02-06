const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors(), bodyParser.json());

app
  .route('/ping')
  .get((_req, res) => {
    res.status(200).json({ message: 'pong' });
  });

app
  .route('/hello')
  .post((req, res) => {
    const { name } = req.body;
    res.status(200).json({ message: `Hello, ${name}` });
  });

app
  .route('/greetings')
  .post((req, res) => {
    const { name, age } = req.body;
    if (+age <= 17 || age === undefined) return res.status(401).json({ message: 'Unauthorized' });
    res.status(200).json({ message: `Hello, ${name}` });
  });

app
  .route('/users/:name/:age')
  .put((req, res) => {
    const { name, age } = req.params;
    res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} de idade` });
  });

app.listen(3001, () => {
  console.log('Trabalhando e ouvindo na porta 3001!');
});