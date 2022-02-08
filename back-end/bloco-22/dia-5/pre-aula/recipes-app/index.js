const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authMiddleware = require('./middlewares/auth-middleware');

const app = express();
app.use(cors(), bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const validadeName = (req, res, next) => {
  const { name } = req.body;
  if (name === undefined || name === '') {
    return res.status(400).json({ message: 'Invalid name!' });
  }
  next();
};

const validadePrice = (req, res, next) => {
  const { body: { price } } = req;
  if (price === undefined) return res.status(400).json({ message: 'Price is required!' });
  if (Number.isNaN(Number(price))) {
    return res.status(400).json({ message: 'Price must be a number!' });
  }
  if (+price < 0) return res.status(400).json({ message: 'Price must be a positive number!' });
  next();
};

app.get('/open', (req, res) => {
  res.send('open!');
});

app.use(authMiddleware);

app.get('/recipes', (_req, res) => {
  res.status(200).json(recipes);
});

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name
    .includes(name) && r.price < parseInt(maxPrice, 10));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id, 10));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
});

app.post('/recipes/:id',
  validadeName,
  validadePrice,
  (req, res, _next) => {
    const { id, name, price, waitTime } = req.body;
    recipes.push({ id, name, price, waitTime });
    res.status(201).json({ message: 'Recipe created successfully!' });
  });

app.put('/recipes/:id',
  validadeName,
  validadePrice,
  (req, res) => {
    const { id } = req.params;
    const { name, price, waitTime } = req.body;
    const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id, 10));

    if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

    recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

    res.status(204).end();
  });

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id, 10));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', (req, res) => res.status(404).json({ message: `Rota '${req.path}' não existe!` }));

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});