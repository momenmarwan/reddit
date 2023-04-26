const {Pool} = require('pg');
require('dotenv').config();
const connectionString = process.env.DB_URL;

const connection = new Pool({
  connectionString,
  ssl: true,
});

module.exports = {connection};

