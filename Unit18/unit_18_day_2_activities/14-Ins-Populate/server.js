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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// creating Campus Library when server starts up
db.Library.create({ name: "Campus Library" })
  .then((dbLibrary) => {
    console.log(dbLibrary);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.post("/submit", async (req, res) => {
  try {
    const { author, title } = req.body;
    // create new book
    const dbBook = await db.Book.create({ author, title });

    const dbLibrary = await db.Library.findOneAndUpdate(
      { name: "Campus Library" }, // criteria: search for campus library
      { $push: { books: dbBook._id } }, // update: add the book id to books field of the library
      { new: true } // options: return the updated library object
    );
    res.json(dbLibrary);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.toString() });
  }
});

app.get("/books", async (req, res) => {
  try {
    const dbBook = await db.Book.find({});
    res.json(dbBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.toString() });
  }
});

app.get("/library", async (req, res) => {
  try {
    const dbLibrary = await db.Library.find({ name: "Campus Library" });
    res.json(dbLibrary);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.toString() });
  }
});

app.get("/populated", async (req, res) => {
  try {
    // get the library populated with data from books collection
    const dbLibrary = await db.Library.find({
      name: "Campus Library",
    }).populate("books");

    res.json(dbLibrary);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
