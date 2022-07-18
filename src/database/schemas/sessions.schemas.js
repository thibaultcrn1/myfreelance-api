const mongoose = require('mongoose');

const SessionsSchema = new mongoose.Schema({

    accessToken: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    refreshToken: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },

})

module.exports = mongoose.model('sessions', SessionsSchema);