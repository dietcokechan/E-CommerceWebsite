const mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: Number, required: true },
    address: { type: String, required: true },
    orders: [{ type: String, required: true }]
});

var clientModel = mongoose.model("clients", clientSchema);

// client.save((err) => {
//     if (err) console.log(err);
// });

module.exports = clientModel;