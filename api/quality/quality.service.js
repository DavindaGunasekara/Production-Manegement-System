const pool2 = require('../../config/databaseOrders');

module.exports = {


    updateOrder: (data, callBack) => {
        pool2.query(
            `UPDATE customerorders 
                SET chemicalStatus = ?
                , productDimension = ?
                , packingType = ?
                ,specialNotesQuality = ?
            WHERE orderNo = ? 
                AND orderType = ?`,
            [
                data.chemicalStatus,
                data.productDimension,
                data.packingType,
                data.specialNotesQuality,
                data.orderNo,
                data.orderType,
                //data.productGrade,
                
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