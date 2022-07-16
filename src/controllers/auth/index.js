const bcrypt = require('bcryptjs');
const clientService = require('../../services/clients')

function register(req, res, next) {
    const { password } = req.body;
    const salt = bcrypt.genSalt(10);

    req.body.password = bcrypt.hashSync(password, salt);

    clientService.register(req.body, (error, result) => {
        if(error) return next(error);
        return res.status(200).send({
            msg: "Success",
            data: result,
        });
    });
};

function login(req, res, next) {
    const { email, password } = req.body;

    clientService.login({ email, password }, (error, result) => {
        if(error) return next(error);
        return res.status(200).send({
            msg: "Success",
            data: result,
        });
    })
}

function clientProfile(req, res, next) {
    return res.status(200).send({ msg: "Authorized User!" });
}

module.exports = {
    register,
    login,
    clientProfile
};