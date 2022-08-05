const { UsersSchema } = require('../../database/schemas')
const jwt = require('jsonwebtoken');
const mailgun = require('mailgun-js');
const sendMail = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: process.env.MAILGUN_DOMAIN });

async function forgotPasswordControllers(req, res) {

    const { email } = req.body;

    if(!email) return res.status(400).send({ msg: "EMAIL needed" });

    UsersSchema.findOne({ email: email })
    .then((user) => {
        if(!user) return res.status(400).send({ msg: "User with this email does not exist." });

        const token = jwt.sign({ _id: user._id }, process.env.FORGOT_PASSWORD_TOKEN_SECRET, { expiresIn: '20m' });
        const data = {
            from: 'noreply@myfreelance.com',
            to: email,
            subject: 'MyFreelance - Réinitialiser votre mot de passe.',
            html: `
                <h2>Cliquez <a href="${process.env.CLIENT_URL}/auth/reset-password/${token}">ici</a> afin de réinitialiser votre mot de passe !</h2>
            `
        }

        return user.updateOne({ resetLink: token })
        .then((success) => {
            if(success) {
                sendMail.messages().send(data, function (err, body) {
                    if(err) return res.status(500).send({ err: err.message });
                    return res.status(200).send({ msg: "EMAIL has been sent." });
                })
            }
        })
        .catch((err ) => res.status(500).send({ err }));

    })
    .catch((err) => res.status(500).send({ err }));

}

module.exports = { forgotPasswordControllers };