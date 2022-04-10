const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const config = {
  user: process.env.MYUSER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
};

// console.log(config);

const connection = mysql.createPool(config);

module.exports = connection;