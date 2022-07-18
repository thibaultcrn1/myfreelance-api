const jwt = require('jsonwebtoken');

async function generateRefreshToken(user) {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1y" });
};

module.exports = { generateRefreshToken };