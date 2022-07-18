const jwt = require('jsonwebtoken');

async function authenticateToken(req, res, next) {

    const authHeaders = req.headers['authorization'];
    const token = authHeaders && authHeaders.split(' ')[1];
    if(token === null) return res.status(401).send({ msg: "TOKEN is null" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.status(403).send({ error: err });
        req.user = user;

        console.log(req.user);
        next();
    })

};

module.exports = { authenticateToken };