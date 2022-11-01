const { getBilled } = require('./getbilled.controllers');
const { createBilled } = require('./createbilled.controllers');
const { updateBilled } = require('./updatebilled.controllers');
const { getNotBilled } = require('./getnotbilled.controllers');
const { createNotBilled } = require('./createnotbilled.controllers');
const { updateNotBilled } = require('./updatenotbilled.controllers');

module.exports = {
    getBilled,
    createBilled,
    updateBilled,
    getNotBilled,
    createNotBilled,
    updateNotBilled
};