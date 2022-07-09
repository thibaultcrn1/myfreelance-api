const ClientSchema = require('../../database/schemas/ClientSchema');

async function updateClientController(req, res) {
    const { id, client_number, firstname, lastname, email, address_number, address_line, zip_code, country } = req.body;

    if(!id) return res.status(400).send({ msg: "id Required" });
    if(!client_number) return res.status(400).send({ msg: "client_number Required" });
    if(!firstname) return res.status(400).send({ msg: "firstname Required" });
    if(!lastname) return res.status(400).send({ msg: "lastname Required" });
    if(!email) return res.status(400).send({ msg: "email Required" });
    if(!address_number) return res.status(400).send({ msg: "address_number Required" });
    if(!address_line) return res.status(400).send({ msg: "address_line Required" });
    if(!zip_code) return res.status(400).send({ msg: "zip_code Required" });
    if(!country) return res.status(400).send({ msg: "country Required"})

    const updateClient = await ClientSchema.findOneAndUpdate({ id: id }, {
        client_number: client_number,
        firstname: firstname,
        lastname: lastname,
        email: email,
        address_number: address_number,
        address_line: address_line,
        zip_code: zip_code,
        country: country
    }, { new: true });

    return updateClient ? res.status(200).send({ updateClient }) : res.status(400).send({ msg: 'An error has occured.' })
}

module.exports = updateClientController;