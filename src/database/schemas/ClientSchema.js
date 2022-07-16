const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ClientSchema = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        unique: true,
    },
    firstname: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false,
    },
    lastname: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false,
    },
    email: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    isAdmin: {
        type: mongoose.SchemaTypes.Boolean,
        required: true,
        unique: false,
        default: false,
    },
    rank: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false,
        default: "user",
    },
    date: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        unique: false,
        default: Date.now(),
    },
});

ClientSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject._v;
        delete returnedObject.password;
    },
});

ClientSchema.plugin(uniqueValidator, { msg: "Email already in use." });

module.exports = mongoose.model('Client', ClientSchema);