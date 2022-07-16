const ClientSchema = require('../../database/schemas/ClientSchema');

async function createClientController(req, res) {

    const { id, firstname, lastname, email, isAdmin, rank } = req.body;

    if(!id) return res.status(400).send({ msg: "ID Required" });
    if(!firstname) return res.status(400).send({ msg: "FIRSTNAME Required" });
    if(!lastname) return res.status(400).send({ msg: "LASTNAME Required" });
    if(!email) return res.status(400).send({ msg: "EMAIL Required" });
    if(!isAdmin) return res.status(400).send({ msg: "ISADMIN Required" });
    if(!rank) return res.status(400).send({ msg: "RANK Required" });

    const update = await new ClientSchema({
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,        
        isAdmin: isAdmin,
        rank: rank,
    });

    return update.save()
    .then((newClient) => res.status(200).send({ newClient }))
    .catch((err) => res.status(400).send({ err }));
}

async function updateClientController(req, res) {

    const { id } = req.query;
    const { firstname, lastname, email, isAdmin, rank } = req.body;

    if(!id) return res.status(400).send({ msg: "ID Required" });
    if(!firstname) return res.status(400).send({ msg: "FIRSTNAME Required" });
    if(!lastname) return res.status(400).send({ msg: "LASTNAME Required" });
    if(!email) return res.status(400).send({ msg: "EMAIL Required" });
    if(!isAdmin) return res.status(400).send({ msg: "ISADMIN Required" });
    if(!rank) return res.status(400).send({ msg: "RANK Required" });

    await ClientSchema.findOneAndDelete({ id: id });

    const update = await new ClientSchema({
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        isAdmin: isAdmin,
        rank: rank,
    });

    return update.save()
    .then((updatedClient) => res.status(200).send({ updatedClient }))
    .catch((err) => res.status(400).send({ err }));


}

async function deleteClientController(req, res) {

    const { id } = req.query;

    if(!id) return res.status(400).send({ msg: 'ID Required' });

    const update = await ClientSchema.findOneAndDelete({ id: id });

    return update ? res.status(200).send({ update }) : res.status(400).send({ msg: 'Document not found.' });

}

module.exports = { createClientController, updateClientController, deleteClientController };