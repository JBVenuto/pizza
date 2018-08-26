//Require the MySQL package
var mysql = require("mysql");

//Make a variable to hold the connection information and to export
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "pizza_db"
});

//Make the connection to the database
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

//Export the connection for other files to use
module.exports = connection;