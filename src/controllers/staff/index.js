const StaffSchema = require('../../database/schemas/StaffSchema');
const { encrypt } = require('../../utils/utils');

async function createStaffController(req, res) {

    const { id, firstname, lastname, email, password, isAdmin } = req.body;

    if(!id) return res.status(400).send({ msg: "ID Required" });
    if(!firstname) return res.status(400).send({ msg: "FIRSTNAME Required" });
    if(!lastname) return res.status(400).send({ msg: "LASTNAME Required" });
    if(!email) return res.status(400).send({ msg: "EMAIL Required" });
    if(!password) return res.status(400).send({ msg: "PASSWORD Required"});
    if(!isAdmin) return res.status(400).send({ msg: "ISADMIN Required" });

    const encryptedPassword = encrypt(password);

    const update = await new StaffSchema({
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: encryptedPassword,
        isAdmin: isAdmin,
    });

    return update.save()
    .then((newStaff) => res.status(200).send({ newStaff }))
    .catch((err) => res.status(400).send({ err }));

}

async function updateStaffController(req, res) {

    const { id, firstname, lastname, email, password, isAdmin } = req.body;

    if(!id) return res.status(400).send({ msg: 'ID Required' });
    if(!firstname) return res.status(400).send({ msg: 'FIRSTNAME Required' });
    if(!lastname) return res.status(400).send({ msg: 'LASTNAME Required' });
    if(!email) return res.status(400).send({ msg: 'EMAIL Required' });
    if(!password) return res.status(400).send({ msg: 'PASSWORD Required' });
    if(!isAdmin) return res.status(400).send({ msg: 'ISADMIN Required' });

    const encryptedPassword = await encrypt(password);

    await StaffSchema.findOneAndDelete({ id: id });

    const update = await new StaffSchema({
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: encryptedPassword,
        isAdmin: isAdmin,
    });

    return update.save()
    .then((updatedStaff) => res.status(200).send({ updatedStaff }))
    .catch((err) => res.status(400).send({ err }));

}

async function deleteStaffController(req, res) {

    const { id } = req.body;

    if(!id) return res.status(400).send({ msg: "ID Required" });

    const update = await StaffSchema.findOneAndDelete({ id: id });

    return update ? res.status(200).send({ update }) : res.status(400).send({ msg: "Bad request." });

}

module.exports = { createStaffController, updateStaffController, deleteStaffController };