//Import the orm file to have access to it's functions
var orm = require("../config/orm.js");

//Object to call functions from the orm
var pizza = {
    selectAll: function(cb) {
        orm.selectAll("pizza", function (res){
            cb(res);
        });
    },
    insertOne: function(name, cb) {
        orm.insertOne(name, function(res) {
            cb(res);
        });
    },
    updateOne: function(devour, condition, cb) {
        orm.updateOne(condition, function(res){
            cb(res);
        });
    }
    
};

module.exports = pizza;