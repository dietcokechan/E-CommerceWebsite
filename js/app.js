const express = require('express');
const app = express();

// import routes
const server = require('routes/server');

// set routes
app.use('/', server);