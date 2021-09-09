// import mongoose library
const mongoose = require('mongoose');

// Construct as schema for an Example document.
const ExampleSchema = new mongoose.Schema({
  // Mongoose allows use of built-in types from javascript as well as other
  // types included in the library.
  // (https://mongoosejs.com/docs/schematypes.html) See the documentation on
  // Schema Types for a full list of options for defining each "path" (like a
  // field in SQL) in a schema.
  string: {
    type: String,
    trim: true,
    required: 'String is Required',
  },

  number: {
    type: Number,
    unique: true,
    required: true,
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },

  boolean: Boolean,

  array: Array,

  date: {
    type: Date,
    default: Date.now,
  },

  longstring: {
    type: String,
    validate: [({ length }) => length >= 6, 'Longstring should be longer.'],
  },
});

// create a constructor function for the Example model by passing it a name
// (singular, not plural) for the collection and a schema to use. Mongoose
// will create a collection named "examples" if one doesn't already exist
// when the first Example document is saved to the database.
const Example = mongoose.model('Example', ExampleSchema);

module.exports = Example;
