const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({

    id: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    companyName: {
        type: mongoose.SchemaTypes.String,
    },
    companyAddress: {
        type: mongoose.SchemaTypes.String,
    },
    tvaNumber: {
        type: mongoose.SchemaTypes.String,
        unique: true,
    },
    bankName: {
        type: mongoose.SchemaTypes.String,
    },
    accountBankNumber: {
        type: mongoose.SchemaTypes.String,
        unique: true,
    },
    signature: {
        type: mongoose.SchemaTypes.String,
    }

});

module.exports = mongoose.model('seller', SellerSchema);