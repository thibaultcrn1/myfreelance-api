async function logoutControllers(req, res) {
    return res.status(400).send({ msg: "Endpoint not work!" });
};

module.exports = { logoutControllers };