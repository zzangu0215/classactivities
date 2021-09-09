const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: '',
  database: 'ice_creamDB',
});

// Function to query db for all rows in products, print them in the terminal,
// and close the connection. Call this function last.
const readProducts = () => {
  console.log('Selecting all products...\n');
  connection.query('SELECT * FROM products', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};

// Function to run query which deletes the row for strawberry from products
const deleteProduct = () => {
  console.log('Deleting all strawberry icecream...\n');
  connection.query(
    'DELETE FROM products WHERE ?',
    {
      flavor: 'strawberry',
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} products deleted!\n`);
      // Call readProducts AFTER the DELETE completes
      readProducts();
    }
  );
};

// Function to run query which updates the quantity of the rocky road row.
const updateProduct = () => {
  console.log('Updating all Rocky Road quantities...\n');
  // The mysql package replaces each "?" using the values from the second
  // argument. The query that will be sent to mysql will be
  // "UPDATE products SET quantity = 100 WHERE flavor = 'Rocky Road'"
  const query = connection.query(
    'UPDATE products SET ? WHERE ?',
    [
      {
        quantity: 100,
      },
      {
        flavor: 'Rocky Road',
      },
    ],
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} products updated!\n`);
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};

// Function to run query which adds a new row for rocky road.
const createProduct = () => {
  console.log('Inserting a new product...\n');
  const query = connection.query(
    'INSERT INTO products SET ?',
    {
      flavor: 'Rocky Road',
      price: 3.0,
      quantity: 50,
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} product inserted!\n`);
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};

// Connect to the DB
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  createProduct();
});


connection.query("SELECT * FROM auctions", function(err, result) {

  let options = [];
  for (var i=0; i<result.length; i++) {
    options.push(results[i].item_name);
  }

  return inquirer
    .prompt([
      {
        name:'selection',
        type: 'list',
        choices: options,
        message: 'What option would you like to place a bid in?'
      }
    ])
})


let pickedName;
for (var i=0; i<results.length;i++) {
  if (answer.seletcion === results[i].item_name) {
    pickedName = results[i].item_name;
  }
}