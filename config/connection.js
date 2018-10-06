//Require the MySQL package
var mysql = require("mysql2");

//Make a variable to hold the connection information and to export
var connection; 

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "pizza_db"

});
}

//Make the connection to the database
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

//Export the connection for other files to use
module.exports = connection;