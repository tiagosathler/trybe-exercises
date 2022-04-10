const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');

const Route = require('./routes');

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }), cors());

app.use('/products', Route.products);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});