const CryptoJS = require('crypto-js');

function decrypt(password) {
    return CryptoJS.AES.decrypt(password, process.env.CRYPTOJS_HASH_PASSPHRASE);
};

module.exports = { decrypt };