const StaffSchema = require('../../database/schemas/StaffSchema');

async function createStaffController(req, res) {

    const { id, firstname, lastname, email, isAdmin } = req.body;

    if(!id) return res.status(400).send({ msg: "ID Required" });
    if(!firstname) return res.status(400).send({ msg: "FIRSTNAME Required" });
    if(!lastname) return res.status(400).send({ msg: "LASTNAME Required" });
    if(!email) return res.status(400).send({ msg: "EMAIL Required" });
    if(!isAdmin) return res.status(400).send({ msg: "ISADMIN Required" });

    const update = await new StaffSchema({
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        isAdmin: isAdmin,
    });

    return update.save()
    .then((newStaff) => res.status(200).send({ newStaff }))
    .catch((err) => res.status(400).send({ err }));

}

async function updateStaffController(req, res) {

}

async function deleteStaffController(req, res) {

    const { id } = req.body;

    if(!id) return res.status(400).send({ msg: "ID Required" });

    const update = await StaffSchema.findOneAndDelete({ id: id });

    return update ? res.status(200).send({ update }) : res.status(400).send({ msg: "Bad request." });

}

module.exports = { createStaffController, updateStaffController, deleteStaffController };