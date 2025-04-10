var jwt = require('jsonwebtoken');


const createToken = (id) => {
    const token =  jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: Math.floor(Date.now() / 1000) - 30 * 60 * 60 * 24 * 1 // 1 day,
    });
    return token;
};
module.exports = createToken;