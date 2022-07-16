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
        
    }
})

module.exports = mongoose.model('Client', ClientSchema);