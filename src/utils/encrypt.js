const CryptoJS = require('crypto-js');

function encrypt(password) {
    return CryptoJS.AES.encrypt(password, process.env.CRYPTOJS_HASH_PASSPHRASE);
};

module.exports = { encrypt };