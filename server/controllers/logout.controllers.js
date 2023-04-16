const logout = (req, res) => {
  res.status(200).clearCookie('token').json({massage: 'logout agin'});
};
module.exports = {logout};
