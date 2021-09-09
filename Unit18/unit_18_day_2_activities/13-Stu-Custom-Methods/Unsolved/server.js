// Add code to userModel.js to complete the model

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const User = require("./models/users");

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

// Routes

// Route to post our form submission to mongoDB via mongoose
app.post("/users", async (req, res) => {
  try {
    const { body } = req;
    // Create a new user using req.body
    const dbUser = await new User(body);

    // TODO: Update this route to run the `setFullName` and `lastUpdatedDate` methods
    // before creating a new User. You must create these methods in the model.
    dbUser.setFullName();
    dbUser.lastUpdatedDate();

    const newUser = await User.create(dbUser);

    // If saved successfully, send the the new User document to the client
    res.json(newUser);
  } catch (error) {
    // If an error occurs, send the error to the client
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
