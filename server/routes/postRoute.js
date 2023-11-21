const express = require('express');

const postRouter = express.Router();
const postController = require('../controllers/postController');

postRouter.post('/post', postController.createPost);

postRouter.get('/get', (req, res) => {
  res.send('Get API');
});

module.exports = postRouter;
