const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const currentReservations = [];
const waitlists = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, 'reservations.html')));

// app.post('/api/tables')
app.get('/api/tables', (req, res) => res.json(currentReservations));
app.get('/api/waitlist', (req, res) => res.json(waitlists));

app.post('/api/tablelists', (req, res) => {

  const newTable = req.body;

  // newTable.routeName = newTable.name.replace(/\s+/g, '').toLowerCase();
  console.log(newTable);

  if (currentReservations.length >= 5) {
    waitlists.push(newTable);
    res.json(false);
  } else {
    currentReservations.push(newTable);
    res.json(true);
  }

})

app.listen(PORT, () => console.log(`App listening on PORT http://localhost:${PORT}`));