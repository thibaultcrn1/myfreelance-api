const mongoose = require('mongoose');

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
    address_number: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        unique: false,
    },
    address_line: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false,
    },
    zip_code: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        unique: false,
    },
    country: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false,
    }
})

module.exports = mongoose.model('ClientRegistered', ClientSchema);