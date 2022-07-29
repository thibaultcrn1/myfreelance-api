const { createInvoice } = require('./createinvoice.controllers');
const { updateInvoice } = require('./updateinvoice.controllers');
const { deleteInvoice } = require('./deleteinvoice.controllers');

module.exports = {
    createInvoice,
    updateInvoice,
    deleteInvoice
};