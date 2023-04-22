const {compare} = require('bcrypt');
const {getUserByEmail} = require('../database/query/index');
const {loginSchema, jwtSignAsync} = require('../utils/index');
const {customError} = require('../middleware/errorHandler.middleware');

const login = (req, res, next) => {
  const {body: {password, email, username}} = req;
  loginSchema.validateAsync({password, email, username})
      .then(getUserByEmail)
      .then(({rows}) => {
        if (rows.length) {
          req.userID = rows[0].id;
          if (rows[0].username != username) throw customError(401, 'the user name is wrong');
          return compare(password, rows[0].password);
        };
      })
      .then((isMatch) => {
        if (!isMatch) throw customError(401, 'the password is wrong');
        return jwtSignAsync({email, id: req.userID, username});
      })
      .then((token) => {
        res.cookie('token', token);
        res.json({
          status: 200,
          massage: 'login successfully',
        });
      })
      .catch((error) => {
        next(error);
      });
};

module.exports = {login};
