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
    type: {
        type: mongoose.SchemaTypes.String,
        unique: false,
        required: true,
        default: "not-billed",
    },
    date: {
        type: mongoose.SchemaTypes.Date,
        unique: false,
        default: Date.now(),
    },
    maxPrice: {
        type: mongoose.SchemaTypes.String,
        unique: false,
    },
    minPrice: {
        type: mongoose.SchemaTypes.String,
        unique: false,
    },
    value: {
        type: mongoose.SchemaTypes.String,
        unique: false,
    },

});

module.exports = mongoose.model('tva', TvaSchema);