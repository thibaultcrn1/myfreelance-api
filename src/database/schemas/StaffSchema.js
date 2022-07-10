const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
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
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false,
    },
    isAdmin: {
        type: mongoose.SchemaTypes.Boolean,
        required: true,
        default: false,
        unique: false,
    }
});

module.exports = mongoose.model('StaffRegistered', StaffSchema);