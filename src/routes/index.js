const router = require('express').Router();

const clients = require('./clients');
const staff = require('./staff');
const stock = require('./stock');

router.use('/clients', clients);
router.use('/staff', staff);
router.use('/stock', stock);

module.exports = router;