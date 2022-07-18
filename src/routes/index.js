const router = require('express').Router();

const stock = require('./stock.routes');
const auth = require('./auth.routes');

router.use('/stock', stock);
router.use('/auth', auth);

module.exports = router;