const router = require('express').Router();

const stock = require('./stock.routes');
const auth = require('./auth.routes');
const invoice = require('./invoice.routes');

router.use('/stock', stock);
router.use('/auth', auth);
router.use('/invoice', invoice);

module.exports = router;