//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require('path')

const port = 3000;
const app = express();

// middlewares
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', require(path.join(__dirname, './Router/Router')));


// app listener
app.listen(port, function() {
  console.log("Server started on port 3000");
});
