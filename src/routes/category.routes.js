const router = require('express').Router();

const { createCategory, modifyCategory, deleteCategory } = require('../controllers/category');

router.post('/create', (req, res) => createCategory(req, res));
router.put('/update', (req, res) => modifyCategory(req, res));
router.delete('/delete', (req, res) => deleteCategory(req, res));

module.exports = router;
