const mongoose = require('mongoose');

const TvaSchema = new mongoose.Schema({

    id: {
        type: mongoose.SchemaTypes.String,
        unique: true,
        required: true,
    },
    userId: {
        type: mongoose.SchemaTypes.String,
        unique: true,
        required: true,
    },
    date: {
        type: mongoose.SchemaTypes.Number,
        unique: false,
        default: Date.now(),
    },

});

module.exports = mongoose.model('tva', TvaSchema);