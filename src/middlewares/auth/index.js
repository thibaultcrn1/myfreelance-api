const jwt = require('jsonwebtoken');

function authenticateToken(res, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) return res.status(401).send({ msg: "TOKEN is null" });

    jwt.verify(token, process.env.ACCESS_TOKEN_PASSPHRASE, (err, user) => {
        if(err) return res.status(403).send({ err });
        req.user = user;
        next();
    })
}

function generateAccessToken(username) {
    return jwt.sign({ data: username }, process.env.ACCESS_TOKEN_PASSPHRASE, {
        expiresIn: "1h"
    });
}

module.exports = {
    authenticateToken,
    generateAccessToken
};