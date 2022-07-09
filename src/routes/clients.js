const router = require('express').Router();
const ClientSchema = require('../database/schemas/ClientSchema');

const { createClientController, updateClientController, deleteClientController } = require('../controllers/clientController');

router.get('/', (req, res) => {
    res.send({ msg: 'hello world!' });
})

router.put('/create', async(req, res) => createClientController(req, res));

router.put('/update', async(req, res) => {
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

    const update = await ClientSchema({ 
        id: id, 
        client_number: client_number, 
        firstname: firstname, 
        lastname: lastname, 
        email: email, 
        address_number: address_number, 
        address_line: address_line, 
        zip_code: zip_code, 
        country: country 
    });

    update ? res.send(update) : res.status(400).send({ msg: "Could not find document." });
    return update.save();
})

module.exports = router;