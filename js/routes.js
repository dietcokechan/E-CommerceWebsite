const express = require('express');
const productModel = require('./Models/products');
const clientModel = require('./Models/clients');
const orderModel = require ('./Models/orders');

const app = express();

app.use(express.json());

// endpoints
app.post("/add_product", async(req, res) => {
    const product = new productModel(req.body);
    
    try
    {
        await product.save();
        res.send(product);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
})

app.get("/products", async(req, res) => {
    const products = await productModel.find({});

    try
    {
        res.send(products);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
})

// endpoint for customers
app.post("/add_client", async(req, res) => {

})

app.get("/clients", async(req, res) => {

})

// endpoint for orders
app.post("/add_order", async(req, res) => {

})

app.get("/orders", async(req, res) => {

})

module.exports = app;