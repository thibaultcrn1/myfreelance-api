const { UsersSchema } = require('../../database/schemas');
const jwt = require('jsonwebtoken');
const mailgun = require('mailgun-js');
const sendMail = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: process.env.MAILGUN_DOMAIN });
const bcrypt = require('bcrypt');

async function resetPasswordControllers(req, res) {

    const { reset } = req.query;
    const { newPass } = req.body;

    if(!reset) return res.status(400).send({ msg: "RESET needed" })
    if(!newPass) return res.status(400).send({ msg: "NEWPASS needed" })

    jwt.verify(reset, process.env.FORGOT_PASSWORD_TOKEN_SECRET, function(err) {
       
        if(err) return res.status(401).send({ msg: "Invalid token or expired."});

        UsersSchema.findOne({ resetLink: reset })
        .then((user) => {

            if(!user) return res.status(400).send({ error: "User with this token does not exist." });

            bcrypt.genSalt(10, function(err, salt) {

                if(err) throw err;
                bcrypt.hash(newPass, salt)
                .then(hash => {
                    if(!hash) return res.status(500).send({ error: "HASH error" });
        
                    delete newPass;
                    user.updateOne({ password: hash })
                    .then((success) => {
                        if(success) return res.status(200).send({ msg: "Password was changed with success." });
                    })
                    .catch((err) => res.status(500).send({ err }));
                })
                .catch((err) => res.status(500).send({ err }));

            })

        })
        .catch((err) => res.status(500).send({ err }));

    })

}

module.exports = { resetPasswordControllers };