const {signup} = require('./signup.controllers.js');
const {login} = require('./login.controllers.js');
const {logout} = require('./logout.controllers.js');
const {addPost} = require('./addpost.controllers.js');

module.exports = {signup, login, logout, addPost};
