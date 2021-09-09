const router = require('express').Router();
const Book = require('../../models/Book');

// GET all books
router.get('/', async (req, res) => {
  // Get all books from the book table
  const bookData = await Book.findAll();
  res.json(bookData);

  // Book.findAll().then((bookData) => {
  //   res.json(bookData);
  // });
});

// GET a single book
router.get('/:id', async (req, res) => {
  // Find a single book by its primary key (book_id)
  const bookData = await Book.findByPk(req.params.id)
  res.json(bookData);

  // Book.findByPk(req.params.id).then((bookData) => {
  //   res.json(bookData);
  // });
});

// CREATE a book
router.post('/', async (req, res) => {
  const newBook = await Book.create(req.body);
  res.json(newBook);

  // Book.create(req.body)
  //   .then((newBook) => {
  //     res.json(newBook);
  //   })
  //   .catch((err) => {
  //     res.json(err);
  //   });
});

// Updates book based on its book_id
router.put('/:book_id', async (req, res) => {
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
      // Gets a book based on the book_id given in the request parameters
      where: {
        book_id: req.params.book_id,
      },
    }
  )
    .then((updatedBook) => {
      res.json(updatedBook);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Delete route for a book with a matching book_id
router.delete('/:book_id', (req, res) => {
  // Looks for the books based book_id given in the request parameters
  Book.destroy({
    where: {
      book_id: req.params.book_id,
    },
  })
    .then((deletedBook) => {
      res.json(deletedBook);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
