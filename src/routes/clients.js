const router = require('express').Router();

const { auth } = require('../controllers');

router.get('/', (req, res) => {
    res.send({ msg: 'Unauthorized' });
})

router.post('/login', auth.login);
router.post('/register', auth.register);
router.get('/client-profile', auth.clientProfile);

module.exports = router;