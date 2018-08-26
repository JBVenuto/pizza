//Require packages for body-parser, express, and express-handlebars
var bodyParser = require("body-parser");
var express = require("express");
var exphbs = require("express-handlebars");

//Import routes from the controller so that the server can use them
var routes = require("./controllers/pizza_controller.js");

var app = express();

//set the port to use
PORT = process.env.PORT || 8080;

//Use the public directory for static content
app.use(express.static("public"));

//Use body-parser to make sure data is in a usable format
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Use handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Make use of the routes in the controller
app.use(routes);

//Start the server so it can listen for requests
app.listen(PORT, function() {
    console.log("Server listening on http://localhost:" + PORT);
})
