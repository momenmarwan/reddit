const {addCommentsQuery} = require('../database/query/index');

const addComment = (req, res, next) => {
  const {body: {content, postId}} = req;
  addCommentsQuery({content, postId, id})
      .then((result) => {
        res.json({
          status: 201,
          massage: 'the comment has been added successfully',
          result,
        });
      })
      .catch((error) => {
        next(error);
      });
};
module.exports = {addComment};
