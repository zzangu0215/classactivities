const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // TODO: Enter your MySQL password
  password: "Tvmflaldj09!",
  database: "top_songsDB",
});
connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Find songs by artist",
        "Find all artists who appear more than once",
        "Find data within a specific range",
        "Search for a specific song",
        "exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Find songs by artist":
          artistSearch();
          break;
        case "Find all artists who appear more than once":
          multiSearch();
          break;
        case "Find data within a specific range":
          rangeSearch();
          break;
        case "Search for a specific song":
          songSearch();
          break;
        default:
          connection.end();
      }
    });
};
// TODO: This function should prompt the user for an artist, print all songs by
// the artist, and return to the main menu. The printed songs should be
// formatted nicely. Do not simply log an unformatted array in the console.
// Print a message in the console if no matching songs for the given artist are
// found.
const artistSearch = () => {
  return inquirer
  .prompt({
    name: "artist",
    type: "input",
    message: "What artist would you like to search for?",
  })
  .then((answers) => {
    //if none consolelog none found
    // console.log(answers);
    connection.query(
      'SELECT * FROM top5000 WHERE ?',
      answers,
      (err, res) => {
        if (err) throw err;
        for (var i=0; i<res.length; i++) {
          console.log(`Position: ${res[i].position} || Song: ${res[i].song} || Year: ${res[i].year}\n`);
        }
        runSearch();
      }
    )
      
  });
}
// TODO: Save this one for last! This function should display the names of all
// artists with more than one song and return to the main menu.. 💡 HINT: MySQL has clauses you can use to
// simplify this task. A little Google Fu could go a long way here. I can be
// helpful to test out your MySQL statements in workbench for faster debugging
// and copy them over to your code once you've found the MySQL code you need.
const multiSearch = () => {
  connection.query(
    'SELECT artist, COUNT(artist) FROM top5000 GROUP BY artist HAVING COUNT(artist) > 1',
    (err, res) => {
      // console.log(res);
      if (err) throw err;
      for(var i=0; i<res.length; i++) {
        console.log(`Artist: ${res[i].artist}`);
      }
      runSearch();
    }

  )
};
// TODO: This function should prompt the user for a starting and ending
// position, print the results, and return to the main menu. The printed songs
// should be formatted nicely.
const rangeSearch = () => {
  return inquirer
  .prompt([
    {
      name: "startRange",
      type: "input",
      message: "Enter starting position:",
  
    },
    {
      name: "endRange",
      type: "input",
      message: "Enter ending position:",
    }
  ])
  .then((answers) => {
   
    // console.log(answers);

  connection.query(
    `SELECT * FROM top5000 WHERE (position >= ${answers.startRange} AND position <= ${answers.endRange})`,
    (err, res) => {
      if (err) throw err;
      for (var i=0; i<res.length; i++) {
        console.log(`Position: ${res[i].position} || Song: ${res[i].song} || Year: ${res[i].year}\n`);
      }
      runSearch();
    }
  )
      
  });
  
};
// TODO: This function should prompt the user for a song title, print the
// position, title, artist, and year for the song, then return to the main menu.
// If no match if found, print a message. The printed song should be formatted
// nicely.
const songSearch = () => {
  return inquirer
  .prompt({
    name: "song",
    type: "input",
    message: "What song would you like to search for?",
  })
  .then((answers) => {
    //if none consolelog none found
    // console.log(answers);
    connection.query(
      'SELECT * FROM top5000 WHERE ?',
      answers,
      (err, res) => {
        if (err) throw err;
        for (var i=0; i<res.length; i++) {
          console.log(`Position: ${res[i].position} || Song: ${res[i].song} || Year: ${res[i].year}\n`);
        }
        runSearch();
      }
    )
      
  });
};