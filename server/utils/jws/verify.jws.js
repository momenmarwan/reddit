const {verify} = require('jsonwebtoken');
const verifyAsync = (token) => new Promise((resolve, reject) => {
  verify(token, 'privatekeyforcookies', (error, decoded) => {
    if (error) reject(error);
    resolve(decoded);
  });
});
module.exports = {verifyAsync};

