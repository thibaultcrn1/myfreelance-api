const { createseller } = require('./createseller.controllers');
const { updateseller } = require('./updateseller.controllers');
const { deleteseller } = require('./deleteseller.controllers');

module.exports = {
    createseller,
    updateseller,
    deleteseller
};