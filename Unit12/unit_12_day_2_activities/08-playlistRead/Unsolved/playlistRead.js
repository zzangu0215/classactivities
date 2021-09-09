// TODO: import the mysql module
const mysql = require('mysql');
const inquirer = require('inquirer');

// TODO: create a connection to playlistDB
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Tvmflaldj09!',
  database: 'playlistDB',
});

const readSongs = () => {
  console.log('Selecting all songs...\n');
  connection.query('SELECT * FROM songs', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};

const deleteSong = () => {
  console.log('Deleting all Rock songs...\n');
  connection.query(
    'DELETE FROM songs WHERE ?',
    {
      genre: 'Rock',
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} songs deleted!\n`);
      // Call readProducts AFTER the DELETE completes
      readSongs();
    }
  );
};

const updateSong = () => {
  console.log('Updating all songs...\n');

  const query = connection.query(
    'UPDATE songs SET ? WHERE ?',
    [
      {
        title: "Alive",
      },
      {
        genre: 'Electronic',
      },
    ],
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} songs updated!\n`);
      // Call deleteProduct AFTER the UPDATE completes
      deleteSong();
    }
  );
};

const createSong = () => {
  console.log('Inserting a new song...\n');
  const query = connection.query(
    'INSERT INTO songs SET ?',
    {
      title: 'Butter',
      artist: "BTS",
      genre: 'K-POP',
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} song inserted!\n`);
      // Call updateProduct AFTER the INSERT completes
      updateSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};


// TODO: create a function that will query for all the songs and print the
// result in the terminal.
// const afterConnection = () => {

//   connection.query('SELECT * FROM songs', (err, res) => {

//     if (err) throw err;

//     console.log(res);
//     const genre = "Hip-Hop";

//     connection.query('SELECT * FROM songs WHERE genre = ?', [genre], (err, res) => {

//       if (err) throw err;
//       console.log(`===== ${genre} =====`);
//       console.log(res);
  
//       connection.end();
//     });

//   });
// };

// TODO: connect to the database and call the function to query all the songs.
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  createSong();
});

const chooseSong = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What Song do you want to delete?',
      name: 'delete',
      choices: ['Alive', 'Regulate', 'Butter'],
    }
  ])
    .then(answer => {

      switch(answer) {
        case 'Alive':
      }
    })
}

inquirer.prompt([
  {
    type: 'list',
    message: 'What action do you want to do?',
    name: 'action',
    choices: ['DELETE', 'UPDATE', 'CREATE'],
  }
])
  .then(answer => {
    console.log(answer);

    switch (answer) {
      case 'DELETE':
        connection.query('')
    }
  })

