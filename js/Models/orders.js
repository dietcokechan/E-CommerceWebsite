const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    products: [{ type: String, required: true }],
    quantity: Number,
    total: Number
});

var orderModel = mongoose.model("orders", orderSchema);

// order.save((err, order) => {
//     if (err) console.log(err);
// });

module.exports = orderModel;