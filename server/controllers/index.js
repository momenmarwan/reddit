const {signup} = require('./Users/signup.controllers.js');
const {login} = require('./Users/login.controllers.js');
const {logout} = require('./Users/logout.controllers.js');
const {addPost} = require('./Posts/addPost.controllers.js');
const {addComment} = require('./Comment/addComment.controllers.js');
const {getPosts} = require('./Posts/getPosts.controllers.js');
const {postVote} = require('./Posts/addPostVote.controllers.js');
const {getAllCommentForPost} = require('./Comment/getAllComment.controllers.js');
const {goHome} = require('./goHome.controllers.js');

module.exports = {
  signup, login,
  logout, addPost,
  addComment,
  getPosts,
  postVote,
  getAllCommentForPost,
  goHome,
};
