const router = require('express').Router();

const { registerControllers, loginControllers, refreshTokenControllers, logoutControllers } = require('../controllers/auth');
const { authenticateToken } = require('../middlewares/auth')

const users = [
    {
        username: "Thibault",
        email: "tcarron6@outlook.com"
    },
    {
        username: "Maëva",
        email: "dasilva.maevaeic@gmail.com"
    }
]

router.get('/users', authenticateToken, (req, res) => {
    res.json(users.filter(user => user.username === req.user.name));
});

router.post('/refreshtoken', (req, res) => refreshTokenControllers(req, res));
router.post('/login', (req, res) => loginControllers(req, res));
router.post('/register', (req, res) => registerControllers(req, res));
router.delete('/logout', (req, res) => logoutControllers(req, res));

module.exports = router;