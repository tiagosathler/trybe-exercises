const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const MovieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json(), cors());

app
  .post('/movies', MovieController.create)
  .get('/movies', MovieController.getAll)
  .get('/movies/:id', MovieController.getById);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
