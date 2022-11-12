const { UsersSchema } = require('../../database/schemas');
const bcrypt = require('bcrypt');

const { generateAccessToken, generateRefreshToken } = require('../../services/auth');

async function loginControllers(req, res) {

    const { email, password } = req.body;
    if(!email) return res.status(400).send({ msg: "EMAIL needed" });
    if(!password) return res.status(400).send({ msg: "PASSWORD needed"});

    UsersSchema.findOne({ email: email }).then((user, err) => {

        if(user === null) return res.status(400).send({ msg: "Invalid email" });

        bcrypt.compare(password, user.password)
        .then(async (result) => {
            if(result === true) {

                const payload = {
                    id: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    password: user.password,
                    isAdmin: user.isAdmin
                }

                const accessToken = await generateAccessToken(payload);
                const refreshToken = await generateRefreshToken(payload);
                const email = user.email;

                res.cookie('mf_accessToken', accessToken, {
                    maxAge: process.env.ACCESS_TOKEN_EXPIRESIN
                })

                res.cookie('mf_refreshToken', refreshToken, {
                    maxAge: process.env.REFRESH_TOKEN_EXPIRESIN
                })

                return res.send({ accessToken, refreshToken, email });

            } else {
                return res.status(400).send({ msg: "Invalid Password" });
            }
        })

    })

}

module.exports = { loginControllers };