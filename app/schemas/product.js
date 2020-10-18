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
    price: {
        type: Number,
        required: true
    },
    outOfStock: {
        type: Boolean,
        required: true,
        default: false
    },
    category: {
        type: String
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model("product", product, "product");