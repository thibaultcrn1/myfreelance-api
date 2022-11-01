const router = require('express').Router();

const stock = require('./stock.routes');
const auth = require('./auth.routes');
const invoice = require('./invoice.routes');
const category = require('./category.routes');
const tva = require('./tva.routes');
const seller = require('./seller.routes');

router.use('/stock', stock);
router.use('/category', category);
router.use('/auth', auth);
router.use('/invoice', invoice);
router.use('/tva', tva);
router.use('/seller', seller);

module.exports = router;