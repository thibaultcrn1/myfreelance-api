const { StockSchema } = require('../../database/schemas')

async function getStock(req, res) {

    const stocks = await StockSchema.find();
    res.status(200).json(stocks)

}

module.exports = {
    getStock
}