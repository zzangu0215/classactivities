const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306. This instructs the node app where to find mysql.
  // Changing this does not change the actual port used by mysql.
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Tvmflaldj09!',
  database: 'ice_creamDB',
});

// Open a connection.
connection.connect((err) => {
  // Handle error if there was a problem connecting.
  if (err) throw err;

  // If there is no error print something in the console to confirm the
  // connection was made. (Not required, just for demonstration.)
  console.log(`connected as id ${connection.threadId}`);

  // Close the connection
  connection.end();
});
