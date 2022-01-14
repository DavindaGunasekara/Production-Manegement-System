const pool1 = require('../../config/databaseOrders');

module.exports = {


    displayStock: (data, callBack) => {
        pool1.query(
            `SELECT id, rawMaterial, quantity FROM stock;`,
            
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

     updateStock: (data, callBack) => {
        pool1.query(
            `UPDATE stock SET quantity=? WHERE rawMaterial=?`,
            [
                data.quantity,
                data.rawMaterial
            ],
            
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    }

}