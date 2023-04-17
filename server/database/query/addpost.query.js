/* eslint-disable max-len */
const {connection} = require('../../config/db.conf');
const addPostQuery = ({content, imgUrl, userId}) => {
  return connection.query('INSERT INTO posts(content, img_url, user_id) VALUES($1, $2, $3) RETURNING * ', [content, imgUrl, userId]);
};

module.exports = {addPostQuery};

