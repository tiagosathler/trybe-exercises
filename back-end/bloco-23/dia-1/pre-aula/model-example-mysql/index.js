const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Routes = require('./routes');

const app = express();

app.use(cors(), bodyParser.json());

app.use('/authors', Routes.authors);
app.use('/books', Routes.books);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`ouvindo na porta ${PORT}`);
});