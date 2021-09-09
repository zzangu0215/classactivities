const mongoose = require('mongoose');

const { Schema } = mongoose;

const LibrarySchema = new Schema({
  name: {
    type: String,
    unique: true,
  },

  // Books is an array of book object ids. Ref instructs mongoose to use the
  // 'Book' model when .populate() is used with the Library model.
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
});

const Library = mongoose.model('Library', LibrarySchema);

module.exports = Library;
