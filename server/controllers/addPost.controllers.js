const {addPostQuery} = require('../database/query/index');
const {addPostSchema} = require('../utils/index');
const {verifyAsync} = require('../utils/index');

const addPost = (req, res) => {
  const {body: {content, imgUrl, userId}} = req;
  const {cookies: {token}} = req;
  addPostSchema.validateAsync({content, imgUrl, userId})
      .then(() => verifyAsync(token))
      .then(({id}) => addPostQuery({content, imgUrl, id}))
      .then(({rows}) => {
        res.json({
          status: 201,
          massage: 'the post has been created successfully',
          post: rows,
        });
      });
};
module.exports = {addPost};

