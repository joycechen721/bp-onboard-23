const Post = require('../models/postModel');

// Example of creating a document in the database
const createPost = async (req, res) => {
  const post = new Post(req.body);
  try {
    const data = await post.save(post);
    res.send(data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createPost,
};
