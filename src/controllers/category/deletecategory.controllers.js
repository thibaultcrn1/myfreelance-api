const { CategorySchema } = require('../../database/schemas')

async function deleteCategory(req, res) {

    const { id } = req.body;

    if(!id) return res.status(400).send({ msg: "ID is required" });

    if(await CategorySchema.findOne({ id }) === null) {
        return res.status(401).send({ msg: "ID not exist" });
    } else {
        return await CategorySchema.findOneAndDelete({ id })
        .then((result) => res.status(200).send({ deleteCategory: result }))
        .catch((err) => res.status(401).send({ error: err }));
    };

}

module.exports = { deleteCategory };