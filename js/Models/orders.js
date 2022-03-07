const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    products: [{ type: String, required: true }],
    quantity: Number,
    Total: Number
});

module.exports = mongoose.model("Orders", ordersSchema);