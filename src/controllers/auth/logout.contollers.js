async function logoutControllers(req, res) {

    if(!req.session) return res.status(500).send({ msg: 'No Session.' });

    return req.session.destroy((err) => {

        res.clearCookie('connect.sid');

        if(err) {
            return res.status(400).send({ err: 'Unable to logout' });
        } else {
            return res.status(200).send({ msg: 'Log out successful' });
        }
    })

};

module.exports = { logoutControllers };