const {connection} = require('../../config/db.conf');
const {join} = require('path');
const {readFileSync} = require('fs');

const buildDatabase = () => {
  const path = join(__dirname, '..', 'databaseSchema.sql');
  const sql = readFileSync(path).toString();
  connection.query(sql);
};

buildDatabase();
