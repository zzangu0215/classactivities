// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)

const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200,
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Master',
    age: 55,
    forcePoints: 1350,
  },
];

// Routes

// This code is used to send users a specific HTML file in response to their
// visiting a route.
//
// The __dirname keyword is built into Node and available in every JavaScript
// module. It's always equal to the absolute file path of the parent directory
// for the module. By passing __dirname as well as the relative path to the file
// we want to send into path.join, we'll get back an absolute path to the
// specified file that will work on any computer running the app instead of only
// working on your local development computer.
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));

app.get('/helloworld', (req, res) => res.sendFile(path.join(__dirname, 'hello.html')));

// Displays all characters
app.get('/api/characters', (req, res) => res.json(characters));

// Displays a single character, or returns false
app.get('/api/characters/:character', (req, res) => {
  const chosen = req.params.character;

  console.log(chosen);

  /* Check each character routeName and see if the same as "chosen"
   If the statement is true, send the character back as JSON,
   otherwise send the boolean value false as JSON */

  for (let i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post('/api/characters', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newcharacter = req.body;

  console.log(newcharacter);

  // We then add the json the user sent to the character array
  characters.push(newcharacter);

  // We then display the JSON to the users
  res.json(newcharacter);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
