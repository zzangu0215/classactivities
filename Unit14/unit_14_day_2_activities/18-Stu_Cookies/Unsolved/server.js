const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// TODO: Explain what is being initialized
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Add comments describing the implementation of sessions
// when session starts, cookies are created and sent those back to the clients

const sess = {
  secret: 'Super secret secret',
  // TODO: Add comments describing the implementation of cookies
  cookie: {
    maxAge: 100000,
  },
  resave: false,
  saveUninitialized: true,
  // TODO: Add comments describing the implementation of the store
  store: new SequelizeStore({
    db: sequelize,
  }),
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
