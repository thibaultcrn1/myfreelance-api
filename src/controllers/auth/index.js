const router = require('express').Router();
const ClientSchema = require('../../database/schemas/ClientSchema');

const { generateAccessToken } = require('../../utils/utils');

async function auth(req, res) {
    const { id, email } = req.body;

    if(!id) return res.status(400).send({ msg: "ID: Required" });

    const user = await ClientSchema.findOne({ id: id });

    const accessToken = generateAccessToken(user);

    return res.status(200).send({ accessToken });
}

module.exports = { auth };