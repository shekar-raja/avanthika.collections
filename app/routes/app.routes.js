'use strict'

const express = require('express');
const router = express.Router();

// Controllers
const productController = require('../controllers/product');

router.post('/api/uploadProduct', productController.uploadProduct);

module.exports = router;

