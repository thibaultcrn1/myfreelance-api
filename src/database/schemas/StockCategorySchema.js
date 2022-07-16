const mongoose = require('mongoose');

const StockCategorySchema = new mongoose.Schema({
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
    }
});

module.exports = new mongoose.model('StockCategory', StockCategorySchema);