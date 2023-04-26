const {connection} = require('../../../config/db.conf');

const getVoteNumberQuery = ({postId}) => {
  return connection.query(`SELECT post_id, SUM(CASE WHEN vote_status = true THEN 1 ELSE -1 END) AS vote_sum
  FROM post_votes
  WHERE post_id = $1
  GROUP BY post_id`, [postId]);
};
module.exports = {getVoteNumberQuery};


