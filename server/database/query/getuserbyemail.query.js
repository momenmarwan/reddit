const {connection} = require('../../config/db.conf');

const getUserByEmail = ({email}) => {
  const sql = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  };
  return connection.query(sql);
};
module.exports = {getUserByEmail};
