const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const User = require("./models/user");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.post("/users", async (req, res) => {
  try {
    const { body } = req;
    const user = await new User(body);

    // use custom methods to coolify the user
    user.coolifier();
    user.makeCool();

    const dbUser = await User.create(user);

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
