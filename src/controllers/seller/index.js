const { createSeller } = require('./createseller.controllers');
const { updateSeller } = require('./updateseller.controllers');
const { deleteSeller } = require('./deleteseller.controllers');
const { getSeller } = require('./getseller.controllers');

module.exports = {
    createSeller,
    updateSeller,
    deleteSeller,
    getSeller
};