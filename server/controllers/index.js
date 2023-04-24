const {signup} = require('./signup.controllers.js');
const {login} = require('./login.controllers.js');
const {logout} = require('./logout.controllers.js');
const {addPost} = require('./addPost.controllers.js');
const {addComment} = require('./addComment.controllers.js');
const {getPosts} = require('./getPosts.controllers.js');
const {postVote} = require('./addPostVote.controllers.js');

module.exports = {signup, login, logout, addPost, addComment, getPosts, postVote};
