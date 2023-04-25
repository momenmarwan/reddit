const {getAllCommentQuery} = require('../../database/query/index');
const getAllCommentForPost = (req, res, next) => {
  const postId = req.params.postId;
  console.log(postId);
  getAllCommentQuery({postId})
      .then(({rows}) => {
        res.json({
          status: 200,
          massage: 'send all comment form a post',
          rows,
        });
      })
      .catch((error) => {
        console.log(error);
        next(error);
      });
};
module.exports = {getAllCommentForPost};
