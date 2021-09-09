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
        "Find artists with a top song and top album in the same year",
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
        case "Find artists with a top song and top album in the same year":
          songAndalbumSearch();
          break;
        default:
          connection.end();
      }
    });
};

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
      `SELECT top5000.position, top5000.artist, top5000.song, top_albums.album, top_albums.year AS album_year
      FROM top5000 INNER JOIN top_albums
      ON top5000.artist = top_albums.artist
      WHERE top5000.artist = "${answers.artist}"`,
      (err, res) => {
        if (err) throw err;
        console.log(`${res.length} matches found!`);
        for (var i=0; i<res.length; i++) {
          console.log(`${i+1}.) Year: ${res[i].album_year} Position: ${res[i].position} || Artist: ${res[i].artist} || Song: ${res[i].song} || Album: ${res[i].album}\n`);
        }
        runSearch();
      }
    )
      
  });
}





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
  
    connection.query(
      `SELECT top5000.position, top5000.artist, top5000.song, top_albums.album, top_albums.year AS album_year
      FROM top5000 INNER JOIN top_albums
      ON top5000.artist = top_albums.artist
      AND top5000.year = top_albums.year
      WHERE (top5000.position >= ${answers.startRange} AND top5000.position <= ${answers.endRange})`,
      (err, res) => {
        if (err) throw err;
        for (var i=0; i<res.length; i++) {
          console.log(`${i+1}.) Year: ${res[i].album_year} Position: ${res[i].position} || Artist: ${res[i].artist} || Song: ${res[i].song} || Album: ${res[i].album}\n`);
        }
        runSearch();
      }
    )
      
  });
  
};


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
      `SELECT top5000.position, top5000.artist, top5000.song, top_albums.album, top_albums.year AS album_year
      FROM top5000 INNER JOIN top_albums
      ON top5000.artist = top_albums.artist
      AND top5000.year = top_albums.year
      WHERE top5000.song = "${answers.song}"`,
      answers,
      (err, res) => {
        if (err) throw err;
        for (var i=0; i<res.length; i++) {
          console.log(`${i+1}.) Year: ${res[i].album_year} Position: ${res[i].position} || Artist: ${res[i].artist} || Song: ${res[i].song} || Album: ${res[i].album}\n`);
        }
        runSearch();
      }
    )
      
  });
};

const songAndalbumSearch = () => {
  return inquirer
  .prompt({
    name: "songAndAlbumMatch",
    type: "input",
    message: "What artist would you like to search for?",
  })
  .then((answers) => {
    connection.query(
      `SELECT top_albums.year, top_albums.position, top5000.artist, top5000.song, top_albums.album
      FROM top5000 INNER JOIN top_albums
      ON top5000.year = top_albums.year AND top5000.artist = top_albums.artist
      WHERE top5000.artist = ?
      ORDER BY top_albums.year ASC, top_albums.position ASC`,
      answers.songAndAlbumMatch,
      (err, res) => {
        if (err) throw err;
        for (var i=0; i<res.length; i++) {
          console.log(`${i+1}.) Year: ${res[i].album_year} Album Position: ${res[i].position} || Artist: ${res[i].artist} || Song: ${res[i].song} || Album: ${res[i].album}\n`);
        }
        runSearch();
      }
    )
  });

}