const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({

    id: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
        default: Date.now().toString(),
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
    isAdmin: {
        type: mongoose.SchemaTypes.Boolean,
        required: true,
        unique: false,
        default: false,
    },

});

module.exports = mongoose.model('users', UsersSchema);