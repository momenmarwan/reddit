// const {verifyAsync} = require('../utils/index');
const {verify} = require('jsonwebtoken');
const checkAuth = (req, res, next) => {
  const {cookies: {token}} = req;
  if (!token) return res.redirect('/');
  console.log(token);
  verify(token, 'privatekeyforcookies', (err, decoded) => {
    if (err) next(err);
    console.log(decoded);
    next();
  });
  // verifyAsync(token)
  //     .then((decoded) => {
  //       req.decoded = decoded;
  //       console.log(decoded);
  //       next();
  //     })
  //     .catch((error) => {
  //       next(error);
  //     });
};
module.exports = {checkAuth};

