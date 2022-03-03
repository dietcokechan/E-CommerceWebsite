const mongodb = require('mongodb');
const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: String,
    price: mongodb.Int32,
    img: {
        data: Buffer,
        contentType: String
    },
    color: String,
    quantity: mongodb.Int32,
    category: String
});

const clientsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: mongodb.Int32, required: true },
    address: { type: String, required: true },
    orders: [{ type: Object, required: true }]
});

const ordersSchema = new mongoose.Schema({
    products: [{ type: Object, required: true }],
    quantity: mongodb.Int32,
    Total: mongodb.Int32
});

module.exports = mongoose.model("Products", productsSchema);
module.exports = mongoose.model("Clients", clientsSchema);
module.exports = mongoose.model("Orders", ordersSchema);