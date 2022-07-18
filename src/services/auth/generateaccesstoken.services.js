const jwt = require('jsonwebtoken');

async function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
}

module.exports = { generateAccessToken };