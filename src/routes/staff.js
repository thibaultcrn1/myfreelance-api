const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendStatus(200).send({ msg: 'hello world!' });
})

module.exports = router;