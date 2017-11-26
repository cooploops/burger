// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com" || "localhost",
  user: "ts0jv8vp9kms3iq1" || "root",
  password: "tskp9rl4ntueoj8g" || "Azq225ww",
  database: "v22rtudbu7p3kkff" || "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;