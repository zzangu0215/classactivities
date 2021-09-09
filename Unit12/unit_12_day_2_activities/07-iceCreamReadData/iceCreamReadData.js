const mysql = require('mysql');

// 1) Create the connection object
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Tvmflaldj09!',
  database: 'ice_creamDB',
});

// 2) Define a function to run after connecting to MySQL server
const afterConnection = () => {
  // 5) Run query to get all rows in products table and wait for the result.
  connection.query('SELECT flavor, price FROM products', (err, res) => {
    // 6) Done waiting. Check if query resulted in an error.
    if (err) throw err;

    // 7) If there isn't an error, print the response.
    console.log(res);

    // 8) Finished making queries. Okay to close the connection. Note: Don't
    //    close the connection if there will be more queries.
    connection.end();
  });
};

// 3) Connect to the MySQL server and wait.
connection.connect((err) => {
  if (err) throw err;

  // 4) Connection made. Done waiting. Now its safe to query the database.
  afterConnection();
});
