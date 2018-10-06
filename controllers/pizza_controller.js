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
    pizza.insertOne([
        "pizza_name"
    ], [
        reg.body.pizza_name
    ], function(result) {
        res.json({ id: result.insertedId });
    });
});

//Update a pizza's devoured status
router.put("/pizzas/:id", function(req, res) {
    var id =  req.params.id;
    console.log(util.inspect(req.params));
    console.log("id: " + id);
    //Check to see if the pizza is ready to eat or already been eaten
    if(id == 1) {
        console.log("This pizza has already been eaten");
        // pizza.orderAgain
    }
    else {
        console.log("This pizza is ready to eat.");
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