require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYUSERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_DEV,
    host: process.env.HOSTNAME,
    dialect: process.env.DIALECT,
  },
  test: {
    username: process.env.MYUSERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_TEST,
    host: process.env.HOSTNAME,
    dialect: process.env.DIALECT,
    logging: false,
  },
  production: {
    username: process.env.MYUSERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_PROD,
    host: process.env.HOSTNAME,
    dialect: process.env.DIALECT,
  },
};
