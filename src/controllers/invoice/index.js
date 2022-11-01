const { createInvoice } = require('./createinvoice.controllers');
const { updateInvoice } = require('./updateinvoice.controllers');
const { deleteInvoice } = require('./deleteinvoice.controllers');
const { getInvoice } = require('./getinvoice.controllers');

module.exports = {
    createInvoice,
    updateInvoice,
    deleteInvoice,
    getInvoice
};