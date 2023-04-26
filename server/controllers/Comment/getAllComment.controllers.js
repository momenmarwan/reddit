const {getAllCommentQuery} = require('../../database/query/index');
const getAllCommentForPost = (req, res, next) => {
  const postId = req.params.postId;
  getAllCommentQuery({postId})
      .then(({rows}) => {
        res.json({
          status: 200,
          massage: 'send all comment form a post',
          rows,
        });
      })
      .catch((error) => {
        next(error);
      });
};
module.exports = {getAllCommentForPost};
