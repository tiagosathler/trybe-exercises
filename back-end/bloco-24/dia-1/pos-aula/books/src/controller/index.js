const { Router } = require('express');
const { Book } = require('../models');

const BooksRoute = Router();
const BookRoute = Router();

BooksRoute
  .get('/', async (_req, res) => {
    try {
      const books = await Book.findAll({ order: [['title', 'ASC'], ['createdAt', 'ASC']] });
      return res.status(200).json(books);
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ message: e.message });
    }
  }); 
  
  BookRoute
  .get('/:id', async (req, res) => {
    try {
      const { params: { id } } = req;
      const books = await Book.findByPk(id);
      if (books === null) return res.status(404).json({ message: 'Livro não encontrado' });
      return res.status(200).json(books);
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ message: e.message });
    }
  })
  .get('/search/:id', async (req, res) => {
    try {
      const { query: { title }, params: { id } } = req;
      const books = await Book.findOne({ where: { id, title } });
      if (books === null) return res.status(404).json({ message: 'Livro não encontrado' });

      return res.status(200).json(books);
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ message: e.message });
    }
  })
  .get('/search/:id', async (req, res) => {
    try {
      const { query: { author }, params: { id } } = req;
      const books = await Book.findOne({ where: { id, author } });
      if (books === null) return res.status(404).json({ message: 'Livro não encontrado' });

      return res.status(200).json(books);
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ message: e.message });
    }
  })
  .delete('/:id', async (req, res) => {
    try {
      const { params: { id } } = req;
      const response = await Book
      .destroy({ where: { id } });
      if (response === 0) return res.status(406).json({ message: 'Não apagado' });
      
      return res.status(202).json({ message: 'Apagado com sucesso' });
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ message: e.message });
    }
  })
  .put('/:id', async (req, res) => {
    try {
      const { body: { title, author, pageQuantity }, params: { id } } = req;
      const response = await Book
        .update({ title, author, pageQuantity }, { where: { id } });
      if (response === 0) return res.status(406).json({ message: 'Não modificado' });

      return res.status(202).json({ message: 'Atualizado com sucesso' });
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ message: e.message });
    }
  })
  .post('/', async (req, res) => {
    try {
      const { body: { title, author, pageQuantity } } = req;
      const created = await Book.create({ title, author, pageQuantity });
      // if (response === 0) return res.status(406).json({ message: 'Não adcionado' });

      return res.status(201).json({ created });
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ message: e.message });
    }
  });

module.exports = {
  BooksRoute,
  BookRoute,
};