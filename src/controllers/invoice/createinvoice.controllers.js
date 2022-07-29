const { UsersSchema } = require('../../database/schemas');

async function createInvoice(req, res) {

    const users = await UsersSchema.find();

    return res.status(200).send({ users });

};

module.exports = { createInvoice };