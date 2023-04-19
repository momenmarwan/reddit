const {verifyAsync} = require('../utils/index');
const checkAuth = (req, res, next) => {
  const {cookies: {token}} = req;
  if (!token) return res.redirect('/');
  verifyAsync(token)
      .then((decoded) => {
        req.decoded = decoded;
        next();
      })
      .catch((error) => {
        // eslint-disable-next-line max-len
        if (!token) res.status(401).json({status: 401, massage: 'unauthorized'});
      });
};
module.exports = {checkAuth};

