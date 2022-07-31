const jwt = require('jsonwebtoken');

async function authenticateToken(req, res, next) {

    const authHeaders = req.headers['authorization'];
    const token = authHeaders && authHeaders.split(' ')[1];
    if(token === null) return res.status(401).send({ msg: "TOKEN is null" });

    req.token = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.status(403).send({ msg: "Unauthorized" });
        req.user = user;

        next();
    })

};

module.exports = { authenticateToken };