const express = require('express');
const productModel = require('./Models/products');
const clientModel = require('./Models/clients');
const orderModel = require ('./Models/orders');

const app = express();

app.use(express.json());

// endpoints
app.post("/add_product", async(req, res) => {
    var product = new productModel(req.body);
    
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
    var products = await productModel.find({});

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
    var client = new clientModel(req.body);
    
    try
    {
        await client.save();
        res.send(product);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
})

app.get("/clients", async(req, res) => {
    var clients = await clientModel.find({});

    try
    {
        res.send(clients);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
})

// endpoint for orders
app.post("/add_order", async(req, res) => {
    var order = new orderModel(req.body);
    
    try
    {
        await order.save();
        res.send(order);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
})

app.get("/orders", async(req, res) => {
    var orders = await orderModel.find({});

    try
    {
        res.send(orders);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
})

module.exports = app;