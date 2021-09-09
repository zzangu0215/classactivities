const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  // CODE HERE
  username: {
    type: String,
    trim: true,
    required: "Username is Required",
  },

  password: {
    type: String,
    trim: true,
    require: "Password is Required",
    minLength: 6,
  },

  email: {
    type: String,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
