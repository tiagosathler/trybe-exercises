require('dotenv').config();

const common = {
  username: process.env.MYUSERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOSTNAME,
  dialect: process.env.DIALECT,
};

module.exports = {
  development: {
    ...common,
    database: process.env.DATABASE_DEV,    
  },
  test: {
    ...common,
    database: process.env.DATABASE_TEST,
    logging: false,
  },
  production: {
    ...common,
    database: process.env.DATABASE_PROD,
    logging: false,
  },
};
