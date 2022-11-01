async function getBilled(req, res) {

    const { userId, maxPrice, minPrice } = req.body;

    if(!userId) return res.status(401).send({ msg: "userId is needed" });

}

module.exports = { getBilled };