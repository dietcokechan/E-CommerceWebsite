const express = require('express');
const app = express();

// import routes
const server = require('./server');

// set routes
app.use('/', server);