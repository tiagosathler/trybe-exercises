/* recipesRouter.js */
const express = require('express');

const {
  authMiddleware,
  validadeName,
  validadePrice,
} = require('../middlewares');

const router = express.Router();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

router.use(authMiddleware);

router.get('/', (_req, res) => {
  res.status(200).json(recipes);
});

router.get('/search', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name
    .includes(name) && r.price < parseInt(maxPrice, 10));
  res.status(200).json(filteredRecipes);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id, 10));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
});

router.post('/:id',
  validadeName,
  validadePrice,
  (req, res, _next) => {
    const { id } = req.params;
    const { name, price, waitTime } = req.body;
    const { username } = req.user;
    recipes.push({ id: +id, name, price, waitTime, chef: username });
    res.status(201).json({ message: 'Recipe created successfully!' });
  });

router.put('/:id',
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

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id, 10));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = router;