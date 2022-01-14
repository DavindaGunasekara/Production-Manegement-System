const { createPool } = require('mysql');

const pool = createPool({
    port: 3308,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login'
});

module.exports = pool;