/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const {
  signup,
  goHome,
  login,
  logout,
  addPost,
  addComment,
  getPosts,
  postVote,
  getAllCommentForPost,
} = require('../controllers/index');
const {checkAuth} = require('../middleware/auth.middleware');


router.post('/signup', signup);
router.post('/login', login);
router.use(checkAuth);
router.post('/add-post', addPost);
router.post('/add-comment', addComment);
router.put('/post-vote', postVote);
router.get('/logout', logout);
router.get('/get-comment-for-post/:postId', getAllCommentForPost);
router.get('/get-posts', getPosts);
router.get('/home', goHome);

module.exports = {router};
