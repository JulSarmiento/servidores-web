const express = require('express');
const router = express.Router();

const containerfunctions = require('../controllers/products.controller');

router.get('/productos', containerfunctions.getAll);

router.get('/productoRandom', containerfunctions.getRandom);


module.exports = router;