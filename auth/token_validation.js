const { verify } = require('jsonwebtoken');
const jwt = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {

        let header = req.header('Authorization');
        const [type, token] = header.split(' ');

        if (type === 'Bearer' && typeof token !== 'undefined') {
            //token = token.split('')[1];
            jwt.verify(token, 'qwe1234', (err, decoded) => {
                if (err) {
                   return  res.json({
                        success: 0,
                        message: 'Invalid token'
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
                success: 0,
                message: 'Access denied!, unauthorized access'
            });
        }
    }
} 