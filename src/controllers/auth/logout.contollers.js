const jwt = require('jsonwebtoken');

async function logoutControllers(req, res) {

    res.clearCookie('mf_refreshToken');
    res.clearCookie('mf_accessToken');

    return res.redirect('/');

};

module.exports = { logoutControllers };