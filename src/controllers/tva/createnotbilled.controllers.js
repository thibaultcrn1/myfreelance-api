const { v4 } = require('uuid');
const { TvaSchema } = require('../../database/schemas');

async function createNotBilled(req, res) {

    const { userId, maxPrice, minPrice } = req.body;
    const id = v4();

    if(!userId) return res.status(400).send({ msg: "userId is needed" });
    if(!maxPrice) return res.status(400).send({ msg: "maxPrice is needed" });
    if(!minPrice) return res.status(400).send({ msg: "minPrice is needed" });

    await new TvaSchema({
        id: id,
        userId: userId,
        type: "not-billed",
        maxPrice: maxPrice,
        minPrice: minPrice,
        value: "0",
    })
    .save()
    .then((tva) => {
        return res.status(201).send({ newTvaNotBilled: tva });
    })
    .catch(err => {
        return res.status(500).send({ error: err });
    })

};

module.exports = { createNotBilled };