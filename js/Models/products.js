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



module.exports = mongoose.model("products", productsSchema);