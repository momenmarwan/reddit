const {connection} = require('../../../config/db.conf');

const getPostQuery = () => {
  return connection.query(`SELECT * FROM posts`);
};

module.exports = {getPostQuery};

