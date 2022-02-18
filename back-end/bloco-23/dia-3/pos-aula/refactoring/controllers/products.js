const ProductModel = require('../models/products');

const getAllUsers = async (req, res, _next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
};

const getUserById = async (req, res, _next) => {
  const { params: { id } } = req;
  const product = await ProductModel.getById(+id);

  res.status(200).json(product);
};

const createUser = async (req, res) => {
  const { body: { name, brand } } = req;

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
};

const excludeUser = async (req, res) => {
  const { params: { id } } = req;
  const products = await ProductModel.exclude(+id);

  res.status(204).json(products);
};

const updateUser = async (req, res) => {
  const { params: { id }, body: { name, brand } } = req;

  const products = await ProductModel.update(+id, name, brand);

  res.status(202).end(products);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  excludeUser,
  updateUser,
};
