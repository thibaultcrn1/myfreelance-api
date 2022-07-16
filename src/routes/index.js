const router = require('express').Router();

const stock = require('./stock.routes');

router.use('/stock', stock);

module.exports = router;