const jwt = require('jsonwebtoken');

async function generateAccessToken(user) {

    console.log(user);

    // return jwt.sign(user, process.env.ACCESS_TOKEN_PASSPHRASE, { expiresIn: "1800s" });
}

module.exports = { generateAccessToken };