// const { MongoClient } = require('mongodb');

// const OPTIONS = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// };

// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

// let db = null;

// const getConnection = () => (db
//     ? Promise.resolve(db)
//     : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
//     db = conn.db('model_example');
//     return db;
//     }));

const mysql = require('mysql2/promise');
require('dotenv').config();

const { env: { MYUSER, PASSWORD, HOST, DATABASE } } = process;

const connection = mysql.createPool({
    host: HOST,
    user: MYUSER,
    password: PASSWORD,
    database: DATABASE,
});

module.exports = connection;
