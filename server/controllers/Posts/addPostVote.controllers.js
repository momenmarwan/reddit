const {getAllVotes, upDataVote, voteQuery} = require('../../database/query');
const {customError} = require('../../middleware/errorHandler.middleware');

const postVote = (req, res, next) => {
  const {body: {postId, status}} = req;
  const userId = req.decoded.id;
  getAllVotes({userId, postId})
      .then(({rows}) => {
        if (rows.length > 0 && rows[0].vote_status === status) {
          throw customError(400, 'you already voted on this post');
        } else if (rows.length > 0 && rows[0].vote_status != status) {
          return upDataVote({userId, postId, status});
        } else {
          return voteQuery({userId, postId, status});
        }
      })
      .then(({rows}) => {
        res.json({
          status: 200,
          massage: 'you have been voted successfully',
          rows,
        });
      })
      .catch((err) => {
        next(err);
      });
};
module.exports = {postVote};
