const router = require('express').Router();

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
];

router.get('/', (_req, res, _next) => {
  if (posts.length === 0) return res.status(200).json([]);
  res.status(200).json({ posts });
});

router.get('/:id', (req, res, next) => {
  const { params: { id } } = req;
  if (Number.isNaN(Number(id))) {
    return next({ statusCode: 400, message: 'invalid id' });
  }
  const found = posts.find(({ id: postId }) => postId === +id);
  if (!found) {
    return next({ statusCode: 404, message: 'post not found' });
  }
  res.status(200).json(found);
});

module.exports = router;