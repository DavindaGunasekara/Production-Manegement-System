const pool1 = require('../../config/databaseOrders');

module.exports = {

    createOrder: (data, callBack) => {
        pool1.query(
            `INSERT INTO customerorders(orderNo, orderType, addedDate, orderQuantity, productGrade, specialNotesExport) VALUES(?,?,curdate(),?,?,?)`,
            [
                data.orderNo,
                data.orderType,
                data.orderQuantity,
                data.productGrade,
                data.specialNotesExport
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    selectOrder: (data, callBack) => {
        pool1.query(
            `SELECT orderQuantity, productGrade, specialNotesExport, chemicalStatus, ProductDimension, packingType, SpecialNotesQuality FROM customerorders WHERE orderNo=? AND orderType=?;`,
            [
                data.orderNo,
                data.orderType
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    selectOrderRegular: (data, callBack) => {
        pool1.query(
            `SELECT * FROM customerorders WHERE orderType='Regular Basis';`,
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    selectOrderOnetime: (data, callBack) => {
        pool1.query(
            `SELECT * FROM customerorders WHERE orderType='One-time Basis';`,
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    }

}