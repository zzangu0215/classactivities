const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

db.User.create({ name: "Ernest Hemingway" })
  .then((dbUser) => {
    console.log(dbUser);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.get("/notes", (req, res) => {
  db.Note.find({})
    .then((dbNote) => {
      res.json(dbNote);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/user", (req, res) => {
  db.User.find({})
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/submit", ({ body }, res) => {
  db.Note.create(body)
    .then(({ _id }) =>
      db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true })
    )
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/populateduser", async (req, res) => {
  // TODO
  // =====
  // Write the query to grab the documents from the User collection,
  // and populate them with any associated Notes.
  // TIP: Check the models out to see how the Notes refers to the User
  try {
    const dbUser = await db.User.find().populate("notes");

    res.json(dbUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.toString() });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
