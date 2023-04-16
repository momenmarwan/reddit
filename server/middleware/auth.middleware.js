/* eslint-disable max-len */
const {verifyAsync} = require('../utils/index');
const checkAuth = (req, res, next) => {
  const {cookies: {token}} = req;
  if (!token) res.status(401).json({status: 401, massage: 'unauthorized'});
  verifyAsync(token)
      .then((decoded) => {
        req.decoded = decoded;
        next();
      })
      .catch((error) => {
        if (!token) res.status(401).json({status: 401, massage: 'unauthorized'});
      });
};
module.exports = {checkAuth};

