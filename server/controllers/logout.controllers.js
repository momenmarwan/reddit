const logout = (req, res) => {
  res.status(200).clearCookie('token').json({massage: 'logout agin', status: 200});
};
module.exports = {logout};
