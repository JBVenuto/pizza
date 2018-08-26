//Import connection.js
var connection = require("../config/connection.js");

//Object with all the functions that can be called from this file
var orm = {
    selectAll: function() {},
    insertOne: function() {},
    updateOne: function() {},
};

//Export the functions for use in other files
module.exports = orm;