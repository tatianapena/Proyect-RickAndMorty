const { login } = require('../controllers/login');
const { getCharById } = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites')

// aqui le estoy diciendo que de express quiero el Router
const { Router } = require('express');
const router = Router()


router.get('/character/:id', (req, res) => {
  getCharById(req, res);
});

router.get('/login', (req, res) => {
  login(req, res);
});

router.post('/fav', (req, res) => {
  postFav(req, res);
});

router.delete('/fav/:id', (req, res) => {
  deleteFav(req, res);
});

module.exports = router;