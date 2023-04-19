const logout = (req, res) => {
  // eslint-disable-next-line max-len
  res.status(200).clearCookie('token').json({massage: 'logout agin', status: 200});
};
module.exports = {logout};
