//Import connection.js
var connection = require("./connection.js");

//----------------------------------------------------------------------------------
// Newly added functions to test out
//----------------------------------------------------------------------------------

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  //-------------end testing------------------------

//Object with all the functions that can be called from this file
var orm = {
    //Collect all the data from the table
    selectAll: function(req, cb) {
        console.log("orm selectAll req: " + req);
        var queryString = "SELECT * FROM pizza;";
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    //Insert a new pizza into the table
    //-----------------------------------------------------------------------
    // insertOne: function(name, cb) {
    //     console.log("pizza name: " + name)
    //     var queryString = "INSERT INTO pizza (";
    //     queryString += name.toString();
    //     queryString += ") VALUES (?)";
    //     connection.query(queryString, function(err, res) {
    //         if (err) throw err;
    //         cb(res);
    //     });
    // },
    //-------------------------------------------------------------------------
    //above is commented out for testing below is replacement for testing
    //-------------------------------------------------------------------------
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },
    //Update the devoured boolean of the 
    //--------------------------------------------------------------------------
    eat: function(condition, cb) {
        console.log(condition);
        var queryString = "UPDATE pizza SET devoured = true WHERE id = " + condition;
        console.log(queryString)
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    orderAgain: function(condition, cb) {
        console.log(condition);
        var queryString = "UPDATE pizza SET devoured = false WHERE id = " + condition;
        console.log(queryString)
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
    //----------------------------------------------------------------------------
    //above is commented out for testing below is replacement for testing
    //-------------------------------------------------------------------------
    // updateOne: function(table, objColVals, condition, cb) {
    //     var queryString = "UPDATE " + table;
    
    //     queryString += " SET ";
    //     queryString += objToSql(objColVals);
    //     queryString += " WHERE ";
    //     queryString += condition;
    
    //     console.log(queryString);
    //     connection.query(queryString, function(err, result) {
    //       if (err) {
    //         throw err;
    //       }
    
    //       cb(result);
    //     });
    //   },
};

//Export the functions for use in other files
module.exports = orm;