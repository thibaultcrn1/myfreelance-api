const { TvaSchema } = require('../../database/schemas');

async function getNotBilled(req, res) {
    
    const notBilled = await TvaSchema.findOne({ userId: req.user.id, type: "not-billed" });

    return res.status(200).json(notBilled);

}

module.exports = { getNotBilled };