const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    offerPrice: {
        type: Number,
        required: true
    },
    actualPrice: {
        type: Number,
        required: true
    },
    productStock: {
        type: Boolean,
        required: true,
        default: false
    },
    category: {
        type: String
    },
    location: {
        type: String
    },
    productUrls: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("product", product, "product");