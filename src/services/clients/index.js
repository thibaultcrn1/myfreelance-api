const ClientSchema = require('../../database/schemas/ClientSchema');
const bcrypt = require('bcryptjs');
const { auth } = require('../../middlewares');

async function login({ email, password }, callback) {
    const user = await ClientSchema.findOne({ email });

    if(user != null) {
        if(bcrypt.compareSync(password, user.password)) {
            const token = auth.generateAccessToken(username);
            return callback(null, {...user.toJSON(), token});
        } else {
            return callback({ msg: "Invalid credentials!" });
        }
    } else {
        return callback({ msg: "Invalid credentials!" });
    };
};

async function register(params, callback) {
    if(params.email === undefined) return callback({ msg: "EMAIL Required"})

    const client = new ClientSchema(params);
    user.save()
    .then((response) => {
        return callback(null, response);
    })
    .catch((error) => {
        return callback(error);
    });
};

module.exports = { login, register };