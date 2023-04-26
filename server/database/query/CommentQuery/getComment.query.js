const {connection} = require('../../../config/db.conf');
const getAllCommentQuery = ({postId}) => {
  return connection.query(`SELECT * FROM comments WHERE post_id = $1`, [postId]);
};
module.exports = {getAllCommentQuery};
