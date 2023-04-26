const {addUser} = require('./UsersQuery/adduser.query');
const {getUserByEmail} = require('./UsersQuery/getuserbyemail.query');
const {addPostQuery} = require('./PostQuery/addpost.query');
const {addCommentsQuery} = require('./CommentQuery/addcomment.query');
const {getPostQuery} = require('./PostQuery/getPosts.query');
const {getAllCommentQuery} = require('./CommentQuery/getComment.query');
const {getVoteNumberQuery} = require('../query/PostQuery/getNumberOfVotes.query');
const {getAllVotes, upDataVote, voteQuery} = require('./PostQuery/Postvote.query');
const {
  getAllCommentVotesQuery,
  voteOnCommentQuery,
  upDateVoteCommentQuery,
} = require('./CommentQuery/commentVote.query');
module.exports = {
  addUser,
  getUserByEmail,
  addPostQuery,
  addCommentsQuery,
  getPostQuery,
  getAllVotes,
  upDataVote,
  voteQuery,
  getAllCommentQuery,
  getAllCommentVotesQuery,
  voteOnCommentQuery,
  upDateVoteCommentQuery,
  getVoteNumberQuery,
};
