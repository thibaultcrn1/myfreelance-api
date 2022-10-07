const { UsersSchema } = require('../../database/schemas')

async function userControllers(req, res) {

    const user = await UsersSchema.findOne({ id: req.user.id });

    return res.status(200).json(user);

}

module.exports = {
    userControllers
};