//Require the express package
var express = require("express");
//Import model pizza.js file
var pizza = require("../models/pizza.js");

//Router to direct the app
router = express.Router();

//Create the routes 
//Retrieve the data from the table to display on the webpage
router.get("/", function(req, res) {
    pizza.selectAll(function(data) {
        var hbsObject = {
            pizza: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Add a pizza to the table
router.post("/api/pizzas/create", function(req, res) {
    pizza.insertOne([
        "pizza_name"
    ], [
        reg.body.pizza_name
    ], function(result) {
        res.json({ id: result.insertedId });
    });
});

//Update a pizza's devoured status
router.put("/api/pizzas/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition: " + condition);
    pizza.updateOne({
        devoured: true
    }, condition, function(result) {
        if (result, changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

//Export the router
module.exports = router;