const { updateOrder} = require('./quality.controller');
const router = require('express').Router();
//const { checkToken } = require('../../auth/token_validation');

router.post('/update', updateOrder);

module.exports = router;