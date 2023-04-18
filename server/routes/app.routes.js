/* eslint-disable max-len */
/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const {signup, login, logout, addPost, addComment} = require('../controllers/index');

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.post('/add-post', addPost);
router.post('/add-comment', addComment);


module.exports = {router};
