const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: {
        data: Buffer,
        contentType: String
    },
    color: String,
    quantity: Number,
    category: String
});

productsSchema.index({ name: 1, price: 1, img: 1, color: 1, quantity: 1, category:1}, {unique: true})

module.exports = mongoose.model("Products", productsSchema);