const { login } = require('./login.controller');
const router = require('express').Router();

router.post('/login', login);

module.exports = router;