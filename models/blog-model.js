const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a blog Schema and model
const blogSchema = new Schema({
  name: String,
  title: {
    type: String,
    required: [true, 'Name field is required.']
  },
  updated: {
    type: Date,
    default: Date.now
  },
  body: {
    type: String,
    required: [true, 'Body field is required.']
  }
});

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;
