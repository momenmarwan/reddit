const {addUser} = require('./adduser.query');
const {getUserByEmail} = require('./getuserbyemail.query');
const {addPostQuery} = require('./addpost.query');
const {addCommentsQuery} = require('./addcomment.query');
module.exports = {addUser, getUserByEmail, addPostQuery, addCommentsQuery};
