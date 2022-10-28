async function billed(req, res) {

    const { userId } = req.body;

    if(!userId) return res.status(401).send({ msg: "userId is needed" });

    

}

module.exports = { billed };