const express = require('express');
const cors = require('cors');
const app = express();

const recipes = [
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 3, name: 'Macarrão com molho branco', price: 34.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.use(cors());

app
  .route('/recipes')
  .get((_req, res) => {
    const ptColl = new Intl.Collator('pt');
    res.json(recipes.sort((a, b) => ptColl.compare(a.name, b.name)));
  });

app
  .route('/recipes/search')
  .get((req, res) => {
    const { query: { name, maxPrice, minPrice }} = req;
    const filtered = recipes
      .filter(({ name: repiceName, price }) => 
        repiceName.toLowerCase().includes(name.toLowerCase())
        &&
        (price > +minPrice && price < +maxPrice));
    if(filtered.length === 0) return res.status(404).json({ message: 'Recipe not found!'})
    res.status(200).json(filtered);
  });

app
  .route('/recipes/:id')
  .get((req, res) => {
    const { params: { id } } = req;
    const found = recipes.find(({id: drinkId}) => drinkId === +id);
    if(!found) return res.status(404).json({message: 'Recipe not found!'})
    res.status(200).json(found);
  });

app
  .route('/drinks')
  .get((_req, res) => {
  const ptColl = new Intl.Collator('pt');
  res.status(200).json(drinks.sort((a, b) => ptColl.compare(a.name, b.name)));
})

app
  .route('/drinks/search')
  .get((req, res) => {
    const { query: { name }} = req;
    const filtered = drinks
      .filter(({ name: drinkName }) => 
        drinkName.toLowerCase().includes(name.toLowerCase()));
    if(filtered.length === 0) return res.status(404).json({ message: 'Drink not found!'})
    res.status(200).json(filtered);
  });

app
  .route('/drinks/:id')
  .get((req, res) => {
    const { params: { id }} = req;
    const found = drinks.find(({ id: drinkId}) => drinkId === +id);
    if(!found) return res.status(404).json({ message: 'Drink not found'});
    res.status(200).json(found);
  })

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001')
});