const { createUser, getUserByUserId, getUser, updateUser,deleteUser,login } = require('./user.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');

router.post('/create', createUser);
router.get('/getall', checkToken,getUser);
router.get('/get/:id', checkToken,getUserByUserId);
router.patch('/update',checkToken, updateUser);
router.delete('/delete/:id', deleteUser);
router.post('/login', login);

module.exports = router;