const { Router } = require('express');
const ProductController = require('../controllers/products');

const products = Router();

products
  .get('/', ProductController.getAllUsers)
  .get('/:id', ProductController.getUserById)
  .post('/', ProductController.createUser)
  .delete('/:id', ProductController.excludeUser)
  .put('/:id', ProductController.updateUser);

module.exports = {
  products,
};