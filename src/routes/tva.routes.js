const router = require('express').Router();

const { getBilled, getNotBilled, createBilled, createNotBilled, updateBilled, updateNotBilled } = require('../controllers/tva');

router.get('/get-not-billed', (req, res) => getNotBilled(req, res));
router.get('/get-billed', (req, res) => getBilled(req, res));
router.post('/create-not-billed', (req, res) => createNotBilled(req, res));
router.post('/create-billed', (req, res) => createBilled(req, res));
router.put('/update-not-billed', (req, res) => updateNotBilled(req, res));
router.put('/update-billed', (req, res) => updateBilled(req, res));

module.exports = router;