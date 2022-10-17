const router = require('express').Router();

const { billed, not_billed } = require('../controllers/tva');

router.get('/not_billed', (req, res) => not_billed(req, res));
router.get('/billed', (req, res) => billed(req, res));

module.exports = router;