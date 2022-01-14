const { createOrder } = require('./order.service');
const { selectOrder } = require('./order.service');
const { selectOrderRegular } = require('./order.service');
const { selectOrderOnetime} = require('./order.service');
const pool1 = require('../../config/databaseOrders');

module.exports = {
    createOrder: (req, res) => {
        const body = req.body;

        createOrder(body, (err, results) => {
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
    },
    selectOrder: (req, res) => {
        const body = req.body;

        selectOrder(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                // success: 1,
                data: results
            })
        })
    },
    selectOrderRegular: (req, res) => {
        const body = req.body;

        selectOrderRegular(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                // success: 1,
                data: results
            })
        })
    },
    selectOrderOnetime: (req, res) => {
        const body = req.body;

        selectOrderOnetime(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                // success: 1,
                data: results
            })
        })
    }
}