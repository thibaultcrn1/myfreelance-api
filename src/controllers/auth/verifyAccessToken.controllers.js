const jwt = require('jsonwebtoken');

async function verifyAccessTokenControllers(req, res) {

    const { accessToken } = req.body;

    if (!accessToken) return res.status(400).send({ msg: 'accessToken is needed.' });

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(401).send({ err });
        } else {
            return res.status(200).send({ user });
        }
    });

}

module.exports = { verifyAccessTokenControllers };