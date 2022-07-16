const { createStock } = require('./createstock.controllers');
const { deleteStock } = require('./deletestock.controllers');
const { updateStock } = require('./updatestock.controllers');

module.exports = {
    createStock,
    deleteStock,
    updateStock
};

