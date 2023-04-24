const {addUser} = require('./adduser.query');
const {getUserByEmail} = require('./getuserbyemail.query');
const {addPostQuery} = require('./addpost.query');
const {addCommentsQuery} = require('./addcomment.query');
const {getPostQuery} = require('./getPosts.query');
const {getAllVotes, upDataVote, voteQuery} = require('./vote.query');
module.exports = {
  addUser,
  getUserByEmail,
  addPostQuery,
  addCommentsQuery,
  getPostQuery,
  getAllVotes,
  upDataVote,
  voteQuery,
};
