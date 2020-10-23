'use strict'

const express = require('express');
const router = express.Router();

// Controllers
const productController = require('../controllers/product');
const adminController = require('../controllers/admin');

// Admin routes
router.post('/api/createAdmin', adminController.createAdmin);
router.get('/api/getAdmin/:username/:password', adminController.getAdmin);

// Product routes
router.post('/api/uploadProduct', productController.uploadProduct);

module.exports = router;

