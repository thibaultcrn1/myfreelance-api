const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({

    id: {
        type: mongoose.SchemaTypes.String,
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
        unique: true,
    },
    date: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        unique: false,
        default: Date.now(),
    },
    isAdmin: {
        type: mongoose.SchemaTypes.Boolean,
        required: true,
        unique: false,
        default: false,
    },
    resetLink: {
        type: mongoose.SchemaTypes.String,
        required: false,
        unique: true
    }

});

module.exports = mongoose.model('users', UsersSchema);