const { registerControllers } = require('./register.controllers');
const { loginControllers } = require('./login.controllers');
const { refreshTokenControllers } = require('./refreshtoken.controllers');
const { logoutControllers } = require('./logout.contollers');

module.exports = {
    registerControllers,
    loginControllers,
    refreshTokenControllers,
    logoutControllers
};