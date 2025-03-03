const { registerControllers } = require('./register.controllers');
const { loginControllers } = require('./login.controllers');
const { refreshTokenControllers } = require('./refreshtoken.controllers');
const { forgotPasswordControllers } = require('./forgot-password.controllers');
const { resetPasswordControllers } = require('./reset-password.controllers');
const { usersControllers } = require('./users.controllers');
const { userControllers } = require('./user.controllers');
const { verifyAccessTokenControllers } = require('./verifyAccessToken.controllers');

module.exports = {
    registerControllers,
    loginControllers,
    refreshTokenControllers,
    forgotPasswordControllers,
    resetPasswordControllers,
    usersControllers,
    userControllers,
    verifyAccessTokenControllers
};