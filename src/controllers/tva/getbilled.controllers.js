const { TvaSchema } = require('../../database/schemas');

async function getBilled(req, res) {

    const billed = await TvaSchema.findOne({ userId: req.user.id, type: "billed" });

    return res.status(200).json( billed );

}

module.exports = { getBilled };