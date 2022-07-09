const router = require('express').Router();

const { createClientController, updateClientController, deleteClientController } = require('../controllers/clients');

router.get('/', (req, res) => {
    res.send({ msg: 'hello world!' });
})

router.put('/create', async(req, res) => createClientController(req, res));
router.put('/update', async(req, res) => updateClientController(req, res));
router.put('/delete', async(req, res) => deleteClientController(req, res));

module.exports = router;