const pool = require('../../config/database');

module.exports = {


    createUser: (data, callBack) => {
    pool.query(
        `INSERT INTO registration1 (firstName, lastName, email, password) VALUES(?,?,?,?)`,
        [
            data.firstName,
            data.lastName,
            //data.gender,
            data.email,
            data.password,
            //data.number
        ],
        (error, results, fields) => {
            if (error) {
                return callBack(error)
            }
            return callBack(null, results)
        }
    );
    },


    getUser: (callBack) => {
        pool.query(
            `SELECT id, firstName, lastName, gender, email, number FROM registration1`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getUserByUserEmail: (email, callBack) => {
        pool.query(
            `SELECT * FROM registration1 WHERE email=?`,
            [email],
            (error, results, fields) => {
                if (error) {
                   return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    getUserByUserId: (id, callBack) => {
        pool.query(
            `SELECT id, firstName, lastName, gender, email, number  FROM registration1 WHERE id=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },


     updateUser: (data, callBack) => {
    pool.query(
        `UPDATE  registration1 SET firstName=?, lastName=?, gender=?, email=?, password=?, number=? WHERE id=?`,
        [
            data.firstName,
            data.lastName,
            data.gender,
            data.email,
            data.password,
            data.number,
            data.id
        ],
        (error, results, fields) => {
            if (error) {
                return callBack(error)
            }
            return callBack(null, results);
        }
    );
    },
     
     
     
    deleteUser: (data, callBack) => {
        pool.query(
            `DELETE FROM registration1 WHERE id=?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
     } 
};