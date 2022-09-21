const router = require('express').Router();
const passport = require('passport');

const { createCategory, modifyCategory, deleteCategory, getCategory } = require('../controllers/category');

router.post('/create', passport.authenticate('jwt', { session: true }), (req, res) => createCategory(req, res));
router.put('/update', passport.authenticate('jwt', { session: true }), (req, res) => modifyCategory(req, res));
router.delete('/delete', passport.authenticate('jwt', { session: true }), (req, res) => deleteCategory(req, res));
router.get('/get', passport.authenticate('jwt', { session: true }), (req, res) => getCategory(req, res));

module.exports = router;
