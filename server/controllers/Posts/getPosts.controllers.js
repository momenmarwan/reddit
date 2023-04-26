const {getPostQuery} = require('../../database/query/index');
const getPosts = (req, res, next) => {
  getPostQuery()
      .then(({rows}) => {
        res.json({status: 200, result: rows, username: req.decoded.username});
      })
      .catch((error) => {
        next(error);
      });
};
module.exports= {getPosts};
