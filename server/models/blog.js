const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blogPostSchema = new Schema({
  author: String,
  title: String,
  content: String,
  img : [String],
  createdAt: Date,
  tags: [String]
});

let BlogPost = mongoose.model('Post', blogPostSchema);

module.exports = BlogPost;
