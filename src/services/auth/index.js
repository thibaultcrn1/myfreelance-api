const { generateAccessToken } = require('./generateaccesstoken.services');
const { generateRefreshToken } = require('./generaterefreshtoken.services');

module.exports = { 
    generateAccessToken,
    generateRefreshToken
 };