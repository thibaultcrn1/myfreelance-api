const mongoose = require('mongoose');
const { SellerSchema, UsersSchema, StockSchema } = require('./index');

const InvoiceSchema = new mongoose.Schema({

    id: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    invoiceName: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    dateOfIssue: {
        type: mongoose.SchemaTypes.Date,
        required: true,
    },
    transactionDate: {
        type: mongoose.SchemaTypes.Date,
        required: true,
    },
    dueDate: {
        type: mongoose.SchemaTypes.Date,
        required: true,
    },
    date: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: Date.now(),
    },
    client: [UsersSchema],
    seller: [SellerSchema],
    products: [StockSchema],
    total: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: "0",
    },
    paid: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: "0",
    },
    paymentState: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: "Dû",
    },
    devise: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: "EUR",
    },
    paymentMethod: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: "Virement Bancaire",
    },
    notes: {
        type: mongoose.SchemaTypes.String,
    }

});

module.exports = mongoose.model('invoice', InvoiceSchema);