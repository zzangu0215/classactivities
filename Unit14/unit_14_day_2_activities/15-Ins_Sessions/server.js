const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  // The secret should be stored in .env as a real secret.
  secret: 'Super secret secret',

  // The resave option forces the session to be saved back to the session store.
  // In most cases, this will be false.
  resave: false,

  // The saveUninitialized option forces a session that is uninitialized (new
  // but not modified) to be saved to the session store. Choosing false is
  // useful for implementing login sessions.
  saveUninitialized: false,
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
