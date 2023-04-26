const {connection} = require('../../../config/db.conf');

const getPostQuery = () => {
  return connection.query(`SELECT p.*, v.vote_sum
  FROM posts p
  LEFT JOIN (
    SELECT post_id, SUM(CASE WHEN vote_status THEN 1 ELSE -1 END) AS vote_sum
    FROM post_votes
    GROUP BY post_id
  ) v ON p.id = v.post_id`);
};

module.exports = {getPostQuery};

