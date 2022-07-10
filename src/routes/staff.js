const router = require('express').Router();
const { encrypt, decrypt } = require('../utils/utils');
const CryptoJS = require('crypto-js');

const { createStaffController, updateStaffController, deleteStaffController } = require('../controllers/staff');

router.get('/', (req, res) => {
    res.status(200).send({ msg: 'hello world!' });
})

router.put('/create', async(req, res) => await createStaffController(req, res));
router.put('/update', async(req, res) => await updateStaffController(req, res));
router.put('/delete', async(req, res) => await deleteStaffController(req, res));

module.exports = router;