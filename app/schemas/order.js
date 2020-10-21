const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order = new Schema({
    orderedAt: {
        type: Date,
        default: Date.now()
    },
    items: {
        type: Array,
        default: []
    },
    amountPaid: {
        type: Number,
        required: true
    },
    address: {
        type: Schema.Types.Mixed,
        default: {}
    }
});

module.exports = mongoose.model("order", order, "order");