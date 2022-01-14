const pool = require('../../config/databaseLogin');

module.export = {

    getUserByUsername: (username, callBack) => {
        pool.query(
            `SELECT * FROM admins WHERE username=?`,
            [username],
            (error, results,) => {
                if (error) {
                   return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
}