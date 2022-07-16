const router = require('express').Router();

const { auth } = require('../controllers/auth');

router.get("/", (req, res) => {
    res.status(200).send({ msg: "Auth route" });
})

router.post("/login", (req, res) => auth(req, res));

module.exports = router;