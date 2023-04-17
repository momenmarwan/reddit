/* eslint-disable max-len */
const {connection} = require('../../config/db.conf');
const addCommentsQuery = ({content, postID, userId}) => {
  return connection.query('INSERT INTO comments(content, post_id, user_id) VALUES($1, $2, $3) RETURNING * ', [content, postID, userId]);
};

module.exports = {addCommentsQuery};

