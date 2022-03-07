const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://88metalsDB:Gd7cE37qVG2kF6i7@88metals.jmaw4.mongodb.net/88metals', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// start server
app.use(Router);
app.listen(3000, () => console.log("Server ready"));