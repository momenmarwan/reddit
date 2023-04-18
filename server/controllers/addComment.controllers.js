const {addCommentsQuery} = require('../database/query/index');
const {verifyAsync} = require('../utils/index');

const addComment = (req, res, next) => {
  const {body: {content, postId}} = req;
  const {cookies: {token}} = req;
  verifyAsync(token)
      .then(({id}) => addCommentsQuery({content, postId, id}))
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
