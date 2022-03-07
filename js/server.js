const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const model = require("./models");

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://88metalsDB:Gd7cE37qVG2kF6i7@88metals.jmaw4.mongodb.net/test',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// start server
app.use(Router);
app.listen(3000, () => console.log("Server ready"));

// endpoints
app.post("/Product", (req, res) => {

})

app.get("/Products", (req, res) => {

})

// endpoint for customers
app.post("/Client", (req, res) => {

})

app.get("/Clients", (req, res) => {

})

// endpoint for orders
app.post("/Order", (req, res) => {

})

app.get("/Orders", (req, res) => {

})