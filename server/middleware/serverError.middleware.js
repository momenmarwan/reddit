const serverError = (error, req, res, next) => {
  if (error.status) {
    res.status(error.status).json({massage: error, status: error.status});
  } else {
    res.status(500).json({
      massage: error,
      status: error.status,
    });
  }
};
module.exports = {serverError};
