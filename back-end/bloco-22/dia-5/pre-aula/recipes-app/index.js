const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const recipesRouter = require('./routes/recipesRouter');
const { authMiddleware } = require('./middlewares');

const app = express();
app.use(cors(), bodyParser.json());

app.get('/open', (_req, res) => {
  res.send('open!');
});

app.get('/fechado', authMiddleware, (_req, res) => {
  res.send('closed!');
});

app.use('/recipes', recipesRouter);

app.all('*', (req, res) => res.status(404).json({ message: `Rota '${req.path}' não existe!` }));

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});