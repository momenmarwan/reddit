const {hash} = require('bcrypt');
const {signupSchema, jwtSignAsync} = require('../utils/index');
const {addUser, getUserByEmail} = require('../database/query/index');
const {customError} = require('../middleware/errorHandler.middleware');

const signup = (req, res, next) => {
  const {body: {username, password, email}} = req;
  signupSchema.validateAsync({username, password, email})
      .then(() => getUserByEmail({email}))
      .then(({rows}) => {
        // eslint-disable-next-line max-len
        if (rows.length > 0) throw customError(400, 'The user is already exits');
        return hash(password, 10);
      })
      .then((password)=> {
        return addUser({username, password, email});
      })
      .then(({rows}) => {
        req.user = rows[0];
      })
      .then(() => {
        return jwtSignAsync({email, username});
      })
      .then((token) => {
        res.cookie(token, 'token');
        res.json({
          status: 201,
          massage: 'the user has been created successfully',
        });
      })
      .catch((error) => {
        next(error);
      });
};

module.exports = {signup};
