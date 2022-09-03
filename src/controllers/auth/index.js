const { registerControllers } = require('./register.controllers');
const { loginControllers } = require('./login.controllers');
const { refreshTokenControllers } = require('./refreshtoken.controllers');
const { logoutControllers } = require('./logout.contollers');
const { forgotPasswordControllers } = require('./forgot-password.controllers');
const { resetPasswordControllers } = require('./reset-password.controllers');
const { usersControllers } = require('./users.controllers');

module.exports = {
    registerControllers,
    loginControllers,
    refreshTokenControllers,
    logoutControllers,
    forgotPasswordControllers,
    resetPasswordControllers,
    usersControllers
};