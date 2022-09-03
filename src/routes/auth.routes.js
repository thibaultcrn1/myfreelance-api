const router = require('express').Router();
const passport = require('passport');

const { registerControllers, loginControllers, refreshTokenControllers, logoutControllers, forgotPasswordControllers, resetPasswordControllers, usersControllers } = require('../controllers/auth');

router.get('/users', passport.authenticate('jwt', { session: true }), async (req, res) => usersControllers(req, res));
router.post('/refreshtoken', (req, res) => refreshTokenControllers(req, res));
router.post('/login', (req, res) => loginControllers(req, res));
router.post('/register', (req, res) => registerControllers(req, res));
router.put('/forgot-password', (req, res) => forgotPasswordControllers(req, res));
router.put('/reset-password', (req, res) => resetPasswordControllers(req, res));
router.delete('/logout', (req, res) => logoutControllers(req, res));

module.exports = router;