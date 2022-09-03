const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        unique: true,
    },
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false,
    },
    order: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        unique: false,
        default: 0
    },
    isActivate: {
        type: mongoose.SchemaTypes.Boolean,
        required: true,
        unique: false,
        default: true,
    }

})

module.exports = mongoose.model('category', CategorySchema);