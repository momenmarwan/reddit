const {addCommentsQuery} = require('../../database/query/index');

const addComment = (req, res, next) => {
  const {body: {content, postId}} = req;
  addCommentsQuery({content, postId, userId: req.decoded.id})
      .then(({rows}) => {
        res.json({
          status: 201,
          massage: 'the comment has been added successfully',
          author: req.decoded.username,
          rows,
        });
      })
      .catch((error) => {
        next(error);
      });
};
module.exports = {addComment};
