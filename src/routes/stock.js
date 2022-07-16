const router = require('express').Router();

const { addProductController, updateProductController, deleteProductController } = require('../controllers/stock');

router.get('/', (req, res) => {
    res.status(200).send({ msg: "Stock route" });
})

router.put('/create', async(req, res) => await addProductController(req, res));
router.put('/update', async(req, res) => await updateProductController(req, res));
router.put('/delete', async(req, res) => await deleteProductController(req, res));

module.exports = router;