const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({

    id: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        unique: true,
    },
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false,
        default: "Nouvel Item",
    },
    description: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false,
    },
    category: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false,
        default: "Autres",
    },
    quantity: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        unique: false,
        default: 0,
    },
    price: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        unique: false,
        default: 0,
    },
    isActivate: {
        type: mongoose.SchemaTypes.Boolean,
        required: true,
        unique: false,
        default: false,
    },

});

module.exports = mongoose.model('stock', StockSchema);