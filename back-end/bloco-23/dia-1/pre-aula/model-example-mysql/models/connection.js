const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'tiago',
  password: '23t07h80',
  database: 'model_example',
});

module.exports = connection;