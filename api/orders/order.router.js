const { createOrder } = require('./order.controller');
const { selectOrder } = require('./order.controller');
const { selectOrderRegular } = require('./order.controller');
const { selectOrderOnetime} = require('./order.controller');
const router = require('express').Router();
//const { checkToken } = require('../../auth/token_validation');

router.post('/create', createOrder);
router.post('/select', selectOrder);
router.get('/selectRegular', selectOrderRegular);
router.get('/selectOnetime', selectOrderOnetime);

module.exports = router;