const express = require('express');

const app = express();

app.get('/hello', handleHelloRequest);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

function handleHelloRequest(req, res) {
  res.status(200).send('Hello world!');
}