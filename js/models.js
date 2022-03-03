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

const clientsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: Number, required: true },
    address: { type: String, required: true },
    orders: [{ type: String, required: true }]
});

const ordersSchema = new mongoose.Schema({
    products: [{ type: String, required: true }],
    quantity: Number,
    Total: Number
});

module.exports = mongoose.model("Products", productsSchema);
module.exports = mongoose.model("Clients", clientsSchema);
module.exports = mongoose.model("Orders", ordersSchema);