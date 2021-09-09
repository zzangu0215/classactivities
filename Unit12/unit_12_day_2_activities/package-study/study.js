// Using the terminal or your favorite MySQL GUI
// Connect to MySQL server
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',  //put your own password
  database: 'name_db', // the name of your database
});

connection.connect((err) => {
  
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  readWhatever();
});



// Using Node / IDE of your choice
// Create a package.json
// npm init -y
// npm i mysql

// Require mysql

// Connect to MySQL

// Print the 3 rows of data to the console

const readWhatever = () => {
  console.log('Selecting all rows...\n');
  connection.query('SELECT * FROM whatever', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};