const router = require('express').Router();

router.get('/', (req, res) => {
    res.send({ msg: 'hello world!' });
})

module.exports = router;