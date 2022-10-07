const router = require('express').Router();
const passport = require('passport');

const { registerControllers, loginControllers, refreshTokenControllers, logoutControllers, forgotPasswordControllers, resetPasswordControllers, usersControllers, userControllers } = require('../controllers/auth');
const { isAuthenticated } = require('../middleware/auth/isAuthenticated');

router.get('/users', isAuthenticated, (req, res) => usersControllers(req, res));
router.get('/user', isAuthenticated, (req, res) => userControllers(req, res));
router.post('/refreshtoken', (req, res) => refreshTokenControllers(req, res));
router.post('/login', (req, res) => loginControllers(req, res));
router.post('/register', (req, res) => registerControllers(req, res));
router.put('/forgot-password', (req, res) => forgotPasswordControllers(req, res));
router.put('/reset-password', (req, res) => resetPasswordControllers(req, res));
router.get('/logout', (req, res) => logoutControllers(req, res, next));

module.exports = router;