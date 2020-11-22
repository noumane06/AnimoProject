// Primary file for the API

// Dependecies ********************
var http = require('http');
require('dotenv').config();
const app = require('./app'); 
var mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;

// ********************************

/* Connect to mongoDb with mongoose */

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


// ********************************

// Running the server 
app.set('port',9000);
const server = http.createServer(app);

server.listen(9000,console.log("Server is listening on port 9000")) ; 

