const CryptoJS = require('crypto-js');

function encrypt(password) {
    return CryptoJS.AES.encrypt(password, process.env.SECRET_PASSPHRASE).toString();
}

function decrypt(password) {
    return CryptoJS.AES.decrypt(password, process.env.SECRET_PASSPHRASE).toString(CryptoJS.enc.Utf8);
}

module.exports = {
    encrypt,
    decrypt,
}