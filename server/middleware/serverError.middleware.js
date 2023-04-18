const serverError = (error, req, res, next) => {
  if (error.status) {
    res.status(error.status).json({massage: 'server error'});
  } else {
    res.status(500).json({
      massage: 'server error',
    });
  }
};
module.exports = {serverError};
