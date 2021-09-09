const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// TODO: turn on connection to db and server. Change to { force: false } once the
// models are implemented correctly to avoid data loss.
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`🔴 Server listening on port ${PORT}`));
});
