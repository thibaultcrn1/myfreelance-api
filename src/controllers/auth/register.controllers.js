function registerControllers(req, res) {
    return res.status(200).send({ msg: "Register route" });
}

module.exports = { registerControllers };