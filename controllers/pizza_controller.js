//Require the express package
var express = require("express");
//Import model pizza.js file
var pizza = require("../models/pizza.js");
var util = require("util");

//Router to direct the app
router = express.Router();

//Create the routes 
//Retrieve the data from the table to display on the webpage
router.get("/", function(req, res) {
    res.redirect("/pizzas");
  });

router.get("/pizzas", function(req, res) {
    pizza.selectAll(function(data) {
        var hbsObject = {
            pizza: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Add a pizza to the table
router.post("/pizzas/create", function(req, res) {
    pizza.insertOne(req.body.pizza_name, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

//Update a pizza's devoured status
router.put("/pizzas/:id", function(req, res) {
    var id =  req.params.id;
    var devouredState = req.body.devoured;
    console.log("req: " + util.inspect(req.body.devoured));
    console.log("id: " + id);
    console.log("devoured: " + devouredState);
    //Check to see if the pizza is ready to eat or already been eaten
    if(devouredState == "false") {
        console.log("This pizza has already been eaten");
        pizza.orderAgain(id, function(result) {
            console.log(result);
            res.sendStatus(200);
        });
    }
    else {
        console.log("This pizza is ready to eat.");
        pizza.eat(id, function(result) {
            console.log(result);
            res.sendStatus(200);
        });
    }
    // pizza.updateOne({
    //     devoured: true
    // }, condition, function(result) {
    //     if (result, changedRows == 0) {
    //         return res.status(404).end();
    //     }
    //     else {
    //         res.status(200).end();
    //     }
    // });
});

//Export the router
module.exports = router;