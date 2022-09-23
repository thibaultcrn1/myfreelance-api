const { createStock } = require('./createstock.controllers');
const { deleteStock } = require('./deletestock.controllers');
const { updateStock } = require('./updatestock.controllers');
const { getStock } = require('./getstock.controllers');

module.exports = {
    createStock,
    deleteStock,
    updateStock,
    getStock
};

