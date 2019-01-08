// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "cat_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error(`error connecting MySQL: ${err.stack}`);
    return;
  }
  console.log(`MySQL connected as thread id ${connection.threadId}` + "\n\n\n\n");
});

// Export connection for our ORM to use.
module.exports = connection;
