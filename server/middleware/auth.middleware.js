const {verifyAsync} = require('../utils/jws/verify.jws');
const checkAuth = (req, res, next) => {
  const {cookies: {token}} = req;
  if (!token) return res.redirect('/');
  verifyAsync(token)
      .then((decoded) => {
        req.decoded = decoded;
        next();
      })
      .catch((error) => {
        next(error);
      });
};
module.exports = {checkAuth};

