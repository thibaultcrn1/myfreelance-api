const { UsersSchema } = require('../../database/schemas');
const { v4 } = require('uuid');
const bcrypt = require('bcrypt');
const mailgun = require('mailgun-js');
const sending = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: process.env.MAILGUN_DOMAIN });

async function registerControllers(req, res) {

    const { firstname, lastname, email, password } = req.body;

    if(!firstname) return res.status(401).send({ msg: "FIRSTNAME needed" });
    if(!lastname) return res.status(401).send({ msg: "LASTNAME needed" });
    if(!email) return res.status(401).send({ msg: "EMAIL needed" });
    if(!password) return res.status(401).send({ msg: "PASSWORD needed" });

    const id = v4();

    bcrypt.genSalt(10, function(err, salt) {
        if(err) throw err;
        bcrypt.hash(password, salt)
        .then(hash => {
            if(!hash) return res.status(500).send({ error: "HASH error" });

            delete password;
            new UsersSchema({
                id: id,
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hash,
            })
            .save()
            .then((user) => {

                return res.status(201).send({ newUser: user })

            })
            .catch((err) => res.status(500).send({ err }));
        })
        .catch((err) => res.status(500).send({ err }));
    })
}

module.exports = { registerControllers };