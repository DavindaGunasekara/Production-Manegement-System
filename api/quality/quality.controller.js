const { updateOrder} = require('./quality.service');
const pool2 = require('../../config/databaseOrders');

module.exports = {
    updateOrder: (req, res) => {
        const body = req.body;

        updateOrder(body, (err, results) => {
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