const { UsersSchema } = require('../../database/schemas');
const { TvaSchema } = require('../../database/schemas');

async function getNotBilled(req, res) {
    
    const { userId } = req.body;

    if(!userId) return res.status(401).send({ msg: "userId is needed" });

}

module.exports = { getNotBilled };