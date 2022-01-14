const { createPool } = require('mysql');

const pool1 = createPool({
    port: 3308,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rathna database',
    connectionLimit: 10
});

module.exports = pool1;