const router = require('express').Router();

const AuthorsCtrl = require('../controllers/AuthorsCtrl');

router.get('/', AuthorsCtrl.getAll);

router.get('/:id', AuthorsCtrl.findById);

router.post('/', AuthorsCtrl.create);

module.exports = router;