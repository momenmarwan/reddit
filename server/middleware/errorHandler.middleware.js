const customError = (status, massage) => {
  const error = new Error();
  error.status = status;
  error.massage = massage;
  return error;
};
module.exports = {customError};
