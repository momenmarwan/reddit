const {getAllVotes, upDataVote, voteQuery, getVoteNumberQuery} = require('../../database/query');
const {customError} = require('../../middleware/errorHandler.middleware');

const updateOrCreate = (rows, data) => {
  const {userId, postId, status} = data;
  if (!rows.length) {
    return voteQuery({userId, postId, status});
  };
  if (rows.length > 0 && rows[0].vote_status === status) {
    throw customError(400, 'you already voted on this post');
  } else {
    return upDataVote({userId, postId, status});
  }
};

const postVote = (req, res, next) => {
  const {body: {postId, status}} = req;
  const userId = req.decoded.id;
  getAllVotes({userId, postId})
      .then(({rows}) => {
        return updateOrCreate(rows, {userId, postId, status});
      })
      .then(({rows}) => {
        if (!rows.length) {
          throw customError(400, 'post not found');
        }
        return getVoteNumberQuery({postId});
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
