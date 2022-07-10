const ClientSchema = require('../../database/schemas/ClientSchema');

async function createClientController(req, res) {

    const { id, firstname, lastname, email, address_number, address_line, zip_code, country } = req.body;

    if(!id) return res.status(400).send({ msg: "ID Required" });
    if(!firstname) return res.status(400).send({ msg: "FIRSTNAME Required" });
    if(!lastname) return res.status(400).send({ msg: "LASTNAME Required" });
    if(!email) return res.status(400).send({ msg: "EMAIL Required" });
    if(!address_number) return res.status(400).send({ msg: "ADDRESS_NUMBER Required" });
    if(!address_line) return res.status(400).send({ msg: "ADDRESS_LINE Required" });
    if(!zip_code) return res.status(400).send({ msg: "ZIP_CODE Required" });
    if(!country) return res.status(400).send({ msg: "COUNTRY Required" });

    const update = await new ClientSchema({
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        address_number: address_number,
        address_line: address_line,
        zip_code: zip_code,
        country: country,
    });

    return update.save()
    .then((newClient) => res.status(200).send({ newClient }))
    .catch((err) => res.status(400).send({ err }));
}

async function updateClientController(req, res) {

    const { id } = req.params;
    const { firstname, lastname, email, address_number, address_line, zip_code, country } = req.body;

    if(!id) return res.status(400).send({ msg: "ID Required" });
    if(!firstname) return res.status(400).send({ msg: "FIRSTNAME Required" });
    if(!lastname) return res.status(400).send({ msg: "LASTNAME Required" });
    if(!email) return res.status(400).send({ msg: "EMAIL Required" });
    if(!address_number) return res.status(400).send({ msg: "ADDRESS_NUMBER Required" });
    if(!address_line) return res.status(400).send({ msg: "ADDRESS_LINE Required" });
    if(!zip_code) return res.status(400).send({ msg: "ZIP_CODE Required" });
    if(!country) return res.status(400).send({ msg: "COUNTRY Required" });

    await ClientSchema.findOneAndDelete({ id: id });

    const update = await new ClientSchema({
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        address_number: address_number,
        address_line: address_line,
        zip_code: zip_code,
        country: country,
    });

    return update.save()
    .then((updatedClient) => res.status(200).send({ updatedClient }))
    .catch((err) => res.status(400).send({ err }));


}

async function deleteClientController(req, res) {

    const { id } = req.body;

    if(!id) return res.status(400).send({ msg: 'ID Required' });

    const update = await ClientSchema.findOneAndDelete({ id: id });

    return update ? res.status(200).send({ update }) : res.status(400).send({ msg: 'Document not found.' });

}

module.exports = { createClientController, updateClientController, deleteClientController };