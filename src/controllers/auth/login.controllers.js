const { UsersSchema } = require('../../database/schemas');
const { saveSessions } = require('../../utils');
const bcrypt = require('bcrypt');

const { generateAccessToken, generateRefreshToken } = require('../../services/auth');

async function loginControllers(req, res) {

    const { email, password } = req.body;
    if(!email) return res.status(400).send({ msg: "EMAIL needed" });
    if(!password) return res.status(400).send({ msg: "PASSWORD needed"});

    const users = await UsersSchema.findOne({ email: email })

    bcrypt.compare(password, users.password)
    .then(async function(result) {
        if(result == true) {
            const user = {
                id: users.id,
                firstname: users.firstname,
                lastname: users.lastname,
                email: users.email,
                password: users.password,
                isAdmin: users.isAdmin,
            };
        
            const accessToken = await generateAccessToken(user);
            const refreshToken = await generateRefreshToken(user);
            const email = users.email;
        
            saveSessions(accessToken, refreshToken, email);

            return res.send({ accessToken, refreshToken, email });
        } else {
            return res.status(400).send({ msg: "Invalid Password" });
        }
    })
    .catch((err) => res.status(500).send({ err }));

}

module.exports = { loginControllers };