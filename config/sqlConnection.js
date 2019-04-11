const mysql = require("mysql");

const connection = mysql.createConnection({
  host      : process.env.MYSQL_DB_HOST,
  port      : process.env.MYSQL_DB_PORT,
  user      : process.env.MYSQL_DB_USER,
  password  : process.env.MYSQL_DB_PASS,
  database  : process.env.MYSQL_DB_NAME
});

// console.log(connection);

connection.connect(function(err) {
  !err
    ? console.log(`MySQL connected as thread id ${connection.threadId}` + "\n\n\n\n")
    : console.error(`error connecting MySQL: ${err.stack}`)
});

module.exports = connection;
