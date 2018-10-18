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
        orm.insertOne("pizza", [
            "pizza_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    eat: function(id, cb) {
        orm.eat(id, function(res){
            cb(res);
        });
    },
    orderAgain: function(id, cb) {
        orm.orderAgain(id, function(res){
            cb(res);
        });
    }
    
};

module.exports = pizza;