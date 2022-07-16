const router = require('express').Router();

const clients = require('./clients');
const staff = require('./staff');
const stock = require('./stock');
const auth = require('./auth');

router.use('/clients', clients);
router.use('/staff', staff);
router.use('/stock', stock);
router.use('/auth', auth);

module.exports = router;