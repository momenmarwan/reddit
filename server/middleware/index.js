const {checkAuth} = require('./auth.middleware');
const {clientError} = require('./clientError.middelware');
const {serverError} = require('./serverError.middleware');
const {customError} = require('./errorHandler.middleware');

module.exports = {checkAuth, clientError, serverError, customError};
