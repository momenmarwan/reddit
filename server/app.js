const {join} = require('path');
const express = require('express');
const app = express();
const {router} = require('./routes/app.routes');
const {clientError, serverError} = require('./middleware/index');

app.use(express.static(join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);
app.use(clientError);
app.use(serverError);

module.exports = {app};


