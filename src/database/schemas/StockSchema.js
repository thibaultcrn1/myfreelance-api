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
    },
    description: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    image: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: false,
        default: "",
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
    }

})

module.exports = mongoose.model('Stock', StockSchema);