/* eslint-disable max-len */
const {connection} = require('../../../config/db.conf');

const getAllCommentVotesQuery = ({commentId, postId, userId}) => {
  return connection.query(`SELECT * FROM comments_votes WHERE comment_id = $1 AND post_id = $2 AND user_id = $3`, [commentId, postId, userId]);
};

const voteOnCommentQuery = ({commentId, postId, userId, voteStatus}) => {
  return connection.query(`INSERT INTO comments_votes(comment_id, post_id, user_id, vote_status) VALUES ($1, $2, $3, $4)`, [commentId, postId, userId, voteStatus]);
};

const upDateVoteCommentQuery = ({commentId, postId, userId, voteStatus}) => {
  return connection.query(`UPDATE comments_votes SET vote_status = $1 WHERE comment_id = $2 AND post_id = $3 AND user_id = $4`, [voteStatus, commentId, postId, userId]);
};

module.exports = {
  getAllCommentVotesQuery,
  voteOnCommentQuery,
  upDateVoteCommentQuery,
};
