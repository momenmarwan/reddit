/* eslint-disable max-len */
const {connection} = require('../../../config/db.conf');
const addPostQuery = ({content, imgUrl, userId, title}) => {
  return connection.query('INSERT INTO posts(content, img_url, user_id, post_title) VALUES($1, $2, $3, $4) RETURNING * ', [content, imgUrl, userId, title]);
};

module.exports = {addPostQuery};

