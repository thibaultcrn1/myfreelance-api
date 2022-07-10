const StockSchema = require('../../database/schemas/StockSchema');

async function addProductController(req, res) {

    const { id, name, description, image, stock, price } = req.body;

    if(!id) return res.status(400).send({ msg: "ID Required" });
    if(!name) return res.status(400).send({ msg: "NAME Required" });
    if(!description) return res.status(400).send({ msg: "DESCRIPTION Required" });
    if(!image) return res.status(400).send({ msg: "IMAGE Required" });
    if(!stock) return res.status(400).send({ msg: "STOCK Required" });
    if(!price) return res.status(400).send({ msg: "PRICE Required" });

    const update = await new StockSchema({
        id: id,
        name: name,
        description: description,
        image: image,
        stock: stock,
        price: price,
    });

    return update.save()
    .then((newProduct) => res.status(200).send({ newProduct }))
    .catch((err) => res.status(400).send({ err }));

}

async function updateProductController(req, res) {

    const { id } = req.query;
    const { name, description, image, stock, price } = req.body;

    if(!id) return res.status(400).send({ msg: "ID Required" });
    if(!name) return res.status(400).send({ msg: "NAME Required" });
    if(!description) return res.status(400).send({ msg: "DESCRIPTION Required" });
    if(!image) return res.status(400).send({ msg: "IMAGE Required" });
    if(!stock) return res.status(400).send({ msg: "STOCK Required" });
    if(!price) return res.status(400).send({ msg: "PRICE Required" });

    await StockSchema.findOneAndDelete({ id: id });

    const update = await new StockSchema({
        id: id,
        name: name,
        description: description,
        image: image,
        stock: stock,
        price: price,
    });

    return update.save()
    .then((updatedProduct) => res.status(200).send({ updatedProduct }))
    .catch((err) => res.status(400).send({ err }));

}

async function deleteProductController(req, res) {

    const { id } = req.params;

    if(!id) return res.status(400).send({ msg: 'ID Required' });

    const update = await StockSchema.findOneAndDelete({ id: id });

    return update ? res.status(200).send({ update }) : res.status(400).send({ msg: 'Bad request' });

}

module.exports = { addProductController, updateProductController, deleteProductController };