const jwt = require('jsonwebtoken');

async function verifyAccessTokenControllers(req, res) {

    const { accessToken } = req.body;

    if(!accessToken) return res.status(400).send({ msg: 'AccessToken is needed.' });

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(401).json(err)
        } else {
            return res.sendStatus(200).send({ msg: "Success "});
        }
    });

}

module.exports = { verifyAccessTokenControllers };