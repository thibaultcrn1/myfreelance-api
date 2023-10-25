const { CategorySchema } = require('../../database/schemas')

async function getCategory(req, res) {

    const categorys = await CategorySchema.find();
    res.status(200).json(categorys);

}

module.exports = { getCategory };