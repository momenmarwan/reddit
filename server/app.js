const express = require('express');
const app = express();
const {router} = require('./routes/app.routes');

app.use(router);

module.exports = {app};


