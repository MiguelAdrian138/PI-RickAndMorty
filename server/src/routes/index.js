const express = require('express');
const router = express.Router()
const getCharById = require('../controllers/getCharById');
const {postFav, deleteFav} = require("../controllers/handleFavorites.js");
const login = require("../controllers/login.js");

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav );
router.delete('/fav/:id', deleteFav);

module.exports = router;


