const mongoose = require('mongoose');
const Example = require('./models/example.js');

// Create a connection to MongoDB in Heroku if env is set. Else, connect to the
// local MongoDB server and use the database named `dbExample`. The options
// object contains some boilerplate settings. You can research them to see what
// they do, but knowing what each option is for isn't important for now.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dbExample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const data = {
  array: ['item1', 'item2', 'item3'],
  boolean: false,
  string:
    "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
  number: 42,
};

// Create will construct an Example model and save it in the database.
Example.create(data)
  .then((dbExample) => {
    console.log(dbExample);
  })
  .catch(({ message }) => {
    console.log(message);
  }).finally(() => {
    mongoose.connection.close();
  });
