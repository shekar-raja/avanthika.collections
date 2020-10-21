'use strict';

const product = require('../schemas/product');

const productController = () => { };

productController.uploadProduct = (req, res, next) => {
    res.send('Product details saved with ' + JSON.stringify(req.body));
};

module.exports = productController;