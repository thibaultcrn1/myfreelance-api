const { StockSchema } = require('../../database/schemas');

async function deleteStock(req, res) {

    const { id } = req.body;

    if(!id) return res.status(400).send({ msg: "ID is required" });

    return await StockSchema.findOneAndDelete({ id: id })
    .then((result) => {
        res.status(200).send({ deleteStock: result });
    }).catch((err) => {
        res.status(400).send({ error: err });
    });

};

module.exports = { deleteStock };