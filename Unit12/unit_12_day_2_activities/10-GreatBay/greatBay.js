const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "password",
    database: "greatBay_DB"
});

connection.connect(function (err) {
    if (err) throw err;
});

function init() {
  return inquirer
    .prompt({
      name: "PostorBid",
      type: "list",
      message: "Would you like to [POST] an auction or [BID] on an auction?",
      choices: ["POST", "BID", "EXIT"]
    })
    .then(function (answer) {
      if (answer.PostorBid === "POST") {
        post();
      }
      else if (answer.PostorBid === "BID") {
        bid();
      }
      else {
              //exit
      }
    });
}

function post() {
  return inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the item you would like to submit?"
      },
      {
        name: "category",
        type: "input",
        message: "What category would you like to place your auction in?"
      },
      {
          name: "Sbid",
          type: "input",
          message: "What would you like your starting bid to be?"
                // if NaN
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO auctions SET ?",
        {
          item_name: answer.item,
          category: answer.category,
          starting_bid: answer.Sbid,
          highest_bid: answer.Sbid
        },
        function (err, res) {
          if (err) throw err;
          console.log(`${res.affectedRows} Auction Created!\n`);
          init();
        });
    });
}

function bid() {

  connection.query("SELECT * FROM auctions", function (err, results) {
    let options = [];
    for (var i = 0; i < results.length; i++) {
      options.push(results[i].item_name);
    }

    return inquirer
      .prompt([
        {
          name: 'selection',
          type: 'list',
          choices: options,
          message: 'What option would you like to place a bid in?'
        },
        {
          name: 'bid',
          type: 'input',
          message: 'How much would you like to bid?'
        }
      ])
      .then(function (answer) {
        var selected;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_name === answer.selection) {
            selected = results[i];
          }
        }

        if (selected.highest_bid < parseInt(answer.bid)) {
          connection.query(
              'UPDATE auctions SET ? WHERE ?',
              [
                {
                  highest_bid: answer.bid,
                },
                {
                  item_name: answer.selection,
                },
              ],
              (err, res) => {
                if (err) throw err;
                console.log(`${res.affectedRows} bid updated\n`);
                init();
              }
          );
        }
      });
  }); 
}


init();