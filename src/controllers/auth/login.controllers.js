const jwt = require('jsonwebtoken');

const { generateAccessToken, generateRefreshToken } = require('../../services/auth');

async function loginControllers(req, res) {

    const username = req.body.username || req.body.email;
    if(!username) return res.status(400).send({ msg: "USERNAME or EMAIL needed" });

    const user = {
        name: username,
    }

    const accessToken = await generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);

    return res.send({ accessToken, refreshToken });

}

module.exports = { loginControllers };