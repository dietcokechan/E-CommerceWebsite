// connection string: mongodb+srv://MyFirstDatabase:kxnc4cQlgNLqCwbg@cluster0.jqkdw.mongodb.net/test"

const express = require('express');
const mongo = require('mongodb').MongoClient;

const app = express();

// endpoint for products
app.post("/Product", (req, res) => {

})

app.get("/Products", (req, res) => {

})

// endpoint for customers
app.post("/Customer", (req, res) => {

})

app.get("/Customers", (req, res) => {
    
})

// endpoint for orders
app.post("/Order", (req, res) => {

})

app.get("/Orders", (req, res) => {
    
})

// start server
app.listen(5555, () => console.log("Server ready"))