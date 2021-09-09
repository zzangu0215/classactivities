const router = require("express").Router();
const Book = require("../../models/Book");

// GET all books
router.get("/", (req, res) => {
  // Get all books from the book table
  Book.findAll().then((bookData) => {
    res.json(bookData);
  });
});

// GET a book
router.get("/:isbn", (req, res) => {
  // Get one book from the book table
  Book.findOne({
    // Gets the book based on the isbn given in the request parameters
    where: {
      isbn: req.params.isbn,
    },
  }).then((bookData) => {
    res.json(bookData);
  });
});

// Updates book based on its isbn
router.put("/:isbn", (req, res) => {
  // Calls the update method on the Book model
  Book.update(
    {
      // All the fields you can update and the data attached to the request body.
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      pages: req.body.pages,
      edition: req.body.edition,
      is_paperback: req.body.is_paperback,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        isbn: req.params.isbn,
      },
    }
  )
    .then((result) => {
      // Sends the number of updated books
      res.json(result[0]);
    })
    .catch((err) => res.json(err));
});

// Delete route for a book with a matching isbn
router.delete("/:isbn", (req, res) => {
  // Looks for the books based on isbn given in the request parameters and deletes the instance from the database
  Book.destroy({
    where: {
      isbn: req.params.isbn,
    },
  })
    .then((deleteCount) => {
      // Sends the number of deleted books
      res.json(deleteCount);
    })
    .catch((err) => res.json(err));
});

router.post("/seed", (req, res) => {
  Book.bulkCreate([
    {
      title: "Make It Stick: The Science of Successful Learning",
      author: "Peter Brown",
      isbn: "9780674729018",
      pages: 336,
      edition: 1,
      is_paperback: false,
    },
    {
      title:
        "Essential Scrum: A Practical Guide to the Most Popular Agile Process",
      author: "Kenneth Rubin",
      isbn: "9780137043293",
      pages: 500,
      edition: 1,
      is_paperback: true,
    },
    {
      title: "The Pragmatic Programmer: Your Journey To Mastery",
      author: "David Thomas",
      isbn: "9780135957059",
      pages: 352,
      edition: 2,
      is_paperback: false,
    },
    {
      title: "The Art of Computer Programming, Vol. 1: Fundamental Algorithms",
      author: "Donald Knuth",
      isbn: "9780201896831",
      pages: 672,
      edition: 3,
      is_paperback: false,
    },
    {
      title: "Grokking Algorithms",
      author: "Bhargava",
      isbn: "9780201896831",
      pages: 672,
      edition: 1,
      is_paperback: false,
    },
  ]).then(() => {
    res.send("Seeding Success!");
  });
});

module.exports = router;
