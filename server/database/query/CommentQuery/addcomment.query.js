/* eslint-disable max-len */
const {connection} = require('../../../config/db.conf');
const addCommentsQuery = ({content, postId, userId}) => {
  return connection.query('INSERT INTO comments(content, post_id, user_id) VALUES($1, $2, $3) RETURNING * ', [content, postId, userId]);
};

module.exports = {addCommentsQuery};

