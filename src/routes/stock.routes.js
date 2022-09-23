const router = require('express').Router();

const { createStock, updateStock, deleteStock, getStock } = require('../controllers/stock');

router.post('/create', (req, res) => createStock(req, res));
router.put('/update', (req, res) => updateStock(req, res));
router.delete('/delete', (req, res) => deleteStock(req, res));
router.get('/get', (req, res) => getStock(req, res));

module.exports = router;