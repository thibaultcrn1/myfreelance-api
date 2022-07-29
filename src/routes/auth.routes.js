const router = require('express').Router();
const { UsersSchema } = require('../database/schemas')

const { registerControllers, loginControllers, refreshTokenControllers, logoutControllers } = require('../controllers/auth');
const { authenticateToken } = require('../middlewares/auth')

router.get('/users', authenticateToken, async (req, res) => {

    const users = await UsersSchema.find();

    res.json(users.filter(user => user.email === req.user.email));
});

router.post('/refreshtoken', (req, res) => refreshTokenControllers(req, res));
router.post('/login', (req, res) => loginControllers(req, res));
router.post('/register', (req, res) => registerControllers(req, res));
router.delete('/logout', (req, res) => logoutControllers(req, res));

module.exports = router;