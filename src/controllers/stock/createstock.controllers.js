const { StockSchema } = require('../../database/schemas');

async function createStock(req, res) {

    const { id, name, description, category, quantity, price, isActivate } = req.body;

    if(!id) return res.status(400).send({ msg: "ID is required" });
    if(!name) return res.status(400).send({ msg : "NAME is required" });
    if(!description) return res.status(400).send({ msg: "DESCRIPTION is required" });
    if(!category) return res.status(400).send({ msg: "CATEGORY is required" });
    if(!quantity) return res.status(400).send({ msg: "QUANTITY is required" });
    if(!price) return res.status(400).send({ msg: "PRICE is required" });
    if(!isActivate) return res.status(400).send({ msg: "ISACTIVATE is required" });

    const update = await new StockSchema({
        id: id,
        name: name,
        description: description,
        category: category,
        quantity: quantity,
        price: price,
        isActivate: isActivate,
    });

    return update.save()
    .then((result) => res.status(200).send({ newItem: result }))
    .catch((err) => res.status(400).send({ err }));

};

module.exports = { createStock };