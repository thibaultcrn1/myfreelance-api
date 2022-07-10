const router = require('express').Router();
const { encrypt, decrypt } = require('../utils/utils');
const CryptoJS = require('crypto-js');

const { createStaffController, updateStaffController, deleteStaffController } = require('../controllers/staff');

router.get('/', (req, res) => {
    res.status(200).send({ msg: 'hello world!' });
})

router.put('/create', async(req, res) => createStaffController(req, res));
router.put('/update', async(req, res) => updateStaffController(req, res));
router.put('/delete', async(req, res) => deleteStaffController(req, res));

router.put('/password', async(req, res) => {

    const { password } = req.body;

    if(!password) return res.status(400).send({ msg: 'PASSWORD Required' })

    const encryptedPassword = encrypt(password);

    return res.status(200).send({ encryptedPassword });

})

module.exports = router;