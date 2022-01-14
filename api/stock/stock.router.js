const { displayStock, updateStock} = require('./stock.controller');
const router = require('express').Router();
//const { checkToken } = require('../../auth/token_validation');

router.get('/displayStock', displayStock);
router.post('/updateStock', updateStock);

module.exports = router;