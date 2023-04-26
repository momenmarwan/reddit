const {connection} = require('../../../config/db.conf');

const getAllVotes = ({userId, postId}) => {
  return connection.query(`SELECT * FROM post_votes WHERE user_id = $1 AND post_id = $2 `, [userId, postId]);
};


const upDataVote = ({userId, postId, status}) => {
  console.log(status, postId);
  return connection.query(`UPDATE post_votes SET vote_status = $1 WHERE user_id = $2 AND post_id = $3 RETURNING *`, [status, userId, postId]);
};


const voteQuery = ({userId, postId, status}) => {
  return connection.query(`INSERT INTO post_votes (user_id, post_id, vote_status) VALUES ($1, $2, $3) RETURNING *`, [userId, postId, status]);
};


module.exports = {getAllVotes, upDataVote, voteQuery};
