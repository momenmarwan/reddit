/* eslint-disable max-len */
const {sign} = require('jsonwebtoken');
require('dotenv').config();
const jwtSignAsync = ({email, id, username}) => new Promise((resolve, reject) => {
  sign({email, id, username}, process.env.PRIVATE_KEY, (error, token) => {
    if (error) {
      reject(error);
    };
    resolve(token);
  });
});

module.exports = {jwtSignAsync};
