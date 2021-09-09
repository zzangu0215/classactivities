const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  likes: Number,
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;
