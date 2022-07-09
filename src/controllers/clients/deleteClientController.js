const ClientSchema = require('../../database/schemas/ClientSchema');

async function deleteClientController(req, res) {

    const { id } = req.body;

    if(!id) return res.status(400).send({ msg: 'Id Required' })

    const deleteClient = await ClientSchema.findOneAndDelete({ id: id });

    return deleteClient ? res.status(200).send({ deleteClient }) : res.status(400).send({ msg: 'Bad ID' })
    
}

module.exports = deleteClientController;