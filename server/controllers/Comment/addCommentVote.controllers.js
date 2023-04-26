const {getAllCommentVotesQuery, voteOnCommentQuery, upDateVoteCommentQuery} = require('../../database/query');
const {customError} = require('../../middleware/errorHandler.middleware');

const commentVote = (req, res, next) => {
  const {body: {postId, commentId, status}} = req;
  const userId = req.decoded.id;
  getAllCommentVotesQuery({commentId, postId, userId})
      .then(({rows}) => {
        if (rows.length > 0 && rows[0].vote_status === status) {
          throw customError(400, 'you already voted on this post');
        } else if (rows > 0 && rows[0].vote_status !== status) {
          return upDateVoteCommentQuery({commentId, postId, userId, voteStatus: status});
        } else {
          return voteOnCommentQuery({commentId, postId, userId, voteStatus: status});
        }
      })
      .then(({rows}) => {
        res.json({
          status: 200,
          massage: 'you have been voted in this comment successfully',
          rows,
        });
      })
      .catch((error) => {
        next(error);
      });
};
module.exports = {commentVote};
