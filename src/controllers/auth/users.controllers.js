const { UsersSchema } = require('../../database/schemas')

async function usersControllers(req, res) {

    const users = await UsersSchema.find();

    return res.status(200).json(users);

}

module.exports = { usersControllers };