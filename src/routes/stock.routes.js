const router = require('express').Router();

const { createStock, updateStock, deleteStock } = require('../controllers/stock');

router.post('/create', (req, res) => createStock(req, res));
router.post('/update', (req, res) => updateStock(req, res));
router.post('/delete', (req, res) => deleteStock(req, res));

module.exports = router;