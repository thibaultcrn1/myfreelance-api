const router = require('express').Router();

const { createInvoice, updateInvoice, deleteInvoice, getInvoice } = require('../controllers/invoice');

router.post('/create', (req, res) => createInvoice(req, res));
router.put('/update', (req, res) => updateInvoice(req, res));
router.delete('/delete', (req, res) => deleteInvoice(req, res));
router.get('/get', (req, res) => getInvoice(req, res));

module.exports = router;