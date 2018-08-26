//Import connection.js
var connection = require("./connection.js");

//Object with all the functions that can be called from this file
var orm = {
    //Collect all the data from the table
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    //Insert a new pizza into the table
    insertOne: function(name, cb) {
        var queryString = "INSERT INTO pizza (pizza_name) VALUES (?)";
        connection.query(queryString, name, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    //Update the devoured boolean of the pizza
    updateOne: function(objColVals, condition, cb) {
        var queryString = "UPDATE pizza SET devoured = true WHERE id = " + condition;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
};

//Export the functions for use in other files
module.exports = orm;