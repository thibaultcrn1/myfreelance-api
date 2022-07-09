const router = require('express').Router();

const clients = require('./clients');
const staff = require('./staff');

router.use('/clients', clients);
router.use('/staff', staff);

module.exports = router;