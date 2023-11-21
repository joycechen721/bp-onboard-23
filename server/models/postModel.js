const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  _id: {
    required: true,
    type: Number,
  },
  username: {
    required: true,
    type: String,
  },
  body: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('Post', postSchema);
