/* eslint-disable max-len */
/* eslint-disable new-cap */
const {join} = require('path');
const express = require('express');
const router = express.Router();
const {signup, login, logout, addPost, addComment, getPosts} = require('../controllers/index');
const {checkAuth} = require('../middleware/auth.middleware');
router.post('/signup', signup);
router.post('/login', login);

router.get('/logout', logout);
router.use('/add-post', checkAuth);
router.post('/add-post', addPost);
router.use('/add-comment', checkAuth);
router.post('/add-comment', addComment);
router.get('/get-posts', getPosts);
router.use('/home', checkAuth);
router.get('/home', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'pages', 'home.html'));
});


module.exports = {router};
