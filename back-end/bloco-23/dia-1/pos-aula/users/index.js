const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const Middlewares = require('./middlewares');
const useRoute = require('./routes/userRoute');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors(), bodyParser.json());

app.use('/user', useRoute);

app.all('/', (req, res) => {
  res.status(404).json({ message: 'endpoint not found' });
});

app.use(Middlewares.handleError);

app.listen(PORT, () => {
  console.log(`ouvindo na porta ${PORT}`);
});