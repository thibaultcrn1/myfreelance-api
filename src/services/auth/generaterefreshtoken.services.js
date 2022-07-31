const jwt = require('jsonwebtoken');

async function generateRefreshToken(payload) {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1y" });
};

module.exports = { generateRefreshToken };