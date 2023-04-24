/* eslint-disable new-cap */
const {join} = require('path');
const express = require('express');
const router = express.Router();
const {signup, login, logout, addPost, addComment, getPosts, postVote} = require('../controllers/index');
const {checkAuth} = require('../middleware/auth.middleware');
router.post('/signup', signup);
router.post('/login', login);
router.use(checkAuth);
router.get('/logout', logout);
router.post('/add-post', addPost);
router.post('/add-comment', addComment);
router.get('/get-posts', getPosts);
router.put('/post-vote', postVote);
router.get('/home', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'pages', 'home.html'));
});


module.exports = {router};
