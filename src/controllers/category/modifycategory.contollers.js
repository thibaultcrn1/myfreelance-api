const { CategorySchema } = require('../../database/schemas')

async function modifyCategory(req, res) {

    const { id, name, order, type, isActivate } = req.body;

    if(!id) return res.status(400).send({ msg: "ID is required" });
    if(!name) return res.status(400).send({ msg: "NAME is required" });
    if(!order) return res.status(400).send({ msg: "ORDER is required" });
    if(!type) return type = "Default";
    if(!isActivate) return res.status(400).send({ msg: "ISACTIVATE is required" });

    if(await CategorySchema.findOne({ id: id }) === null) {
        res.status(401).send({ msg: "ID not exist" });
    } else {
        return await CategorySchema.findOneAndDelete({ id: id });
    };

    const update = await new CategorySchema({
        id: id,
        name: name,
        order: order,
        type: type,
        isActivate: isActivate,
    });

    return update.save()
    .then((result) => res.status(200).send({ modifyCategory: result }))
    .catch((err) => res.status(401).send({ error: err }));

}

module.exports = { modifyCategory };