const {addPostQuery} = require('../../database/query/index');
const {addPostSchema} = require('../../utils/index');

const addPost = (req, res, next) => {
  const {body: {content, imgUrl, title}} = req;
  const userId = req.decoded.id;

  addPostSchema.validateAsync({content, imgUrl, userId, title})
      .then(addPostQuery)
      .then(({rows}) => res.json({status: 201, massage: `the user ${userId} has added new post`, rows}))
      .catch((error) => next(error));
};

module.exports = {addPost};

