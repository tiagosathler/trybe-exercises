const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

const { BooksRoute, BookRoute } = require('./src/controller');

const PORT = process.env.API_PORT || 3000;

app.use(express.json(), cors(), bodyParser.urlencoded({ extended: false }));

app.use('/books', BooksRoute);
app.use('/book', BookRoute);

app.listen(PORT, () => console.log(`Aplicação ouvindo na porta ${PORT}`));