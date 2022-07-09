const router = require('express').Router();

const clients = require('./clients');

router.use('/clients', clients);

module.exports = router;