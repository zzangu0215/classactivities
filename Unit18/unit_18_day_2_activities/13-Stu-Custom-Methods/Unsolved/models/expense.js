const mongoose = require("mongoose");

const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  // price or amount - Number
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  vendor: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;
