const router = require('express').Router();

const { createSeller, updateSeller, deleteSeller, getSeller } = require('../controllers/seller');

router.post('/create', (req, res) => createSeller(req, res));
router.put('/update', (req, res) => updateSeller(req, res));
router.delete('/delete', (req, res) => deleteSeller(req, res));
router.get('/get', (req, res) => getSeller(req, res));

module.exports = router;