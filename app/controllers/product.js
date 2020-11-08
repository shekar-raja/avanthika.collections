'use strict';

const product = require('../schemas/product');

const productController = () => { };

productController.uploadProduct = (req, res, next) => {
    let productObj = new product();
    productObj.name = req.body.productName;
    productObj.description = req.body.productDescription;
    productObj.offerPrice = parseInt(req.body.productOfferPrice);
    productObj.actualPrice = parseInt(req.body.productActualPrice);
    productObj.productStock = req.body.productStock;
    productObj.category = req.body.category;
    productObj.location = req.body.productLocation;
    productObj.productUrls = req.body.productUrls;
    
    // Save model to DB
    productObj.save((error, doc) => {
        (error) ? console.error(error) : res.json({ result: true, message: "Upload Successful"});
    });
};

module.exports = productController;