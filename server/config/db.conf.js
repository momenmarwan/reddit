const {Pool} = require('pg');
require('dotenv').config();
const connectionString = process.env.DB_URL;

const connection = new Pool({connectionString});

module.exports = {connection};

