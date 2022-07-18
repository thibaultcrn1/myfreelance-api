const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('../../services/auth');

async function refreshTokenControllers(req, res) {

    const authHeaders = req.headers['authorization'];
    const token = authHeaders && authHeaders.split(' ')[1];
    if(!token) return res.status(401).send({ msg: "Bad token" });

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
        if(err) return res.status(401).send({ error: err });
        // TODO check en bdd que le user a toujours les droits et qu'il existe toujours.
        delete user.iat;
        delete user.exp;
        const refreshedToken = await generateAccessToken(user);
        return res.status(200).send({ accessToken: refreshedToken });
    })

};

module.exports = { refreshTokenControllers };