const Reader = require('./Reader');
const Book = require('./Book');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add one to many association for Reader and Book
Reader.hasMany(Book, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

Book.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

module.exports = { Reader, Book, LibraryCard };
