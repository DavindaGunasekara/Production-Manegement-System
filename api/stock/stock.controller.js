const { displayStock } = require('./stock.service');
const { updateStock} = require('./stock.service');
const pool1 = require('../../config/databaseOrders');

module.exports = {
    displayStock: (req, res) => {
        const body = req.body;

        displayStock(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                //success: 1,
                data: results
            })
        })
    },

    updateStock: (req, res) => {
        const body = req.body;

        updateStock(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    }
}