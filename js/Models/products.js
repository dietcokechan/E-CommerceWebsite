const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
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

var productModel = mongoose.model("products", productSchema);

// product.save((err) => {
//     if (err) console.log(err);
// });

module.exports = productModel;