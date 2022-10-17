const jwt = require('jsonwebtoken');

async function logoutControllers(req, res) {

    if(req.user) {

        res.clearCookie('myFreelance_refreshToken');
        res.clearCookie('myFreelance_accessToken');

        return res.redirect('/');

    } else {
        return res.sendStatus(400).send({ error: "You're already not connected" });
    }

};

module.exports = { logoutControllers };