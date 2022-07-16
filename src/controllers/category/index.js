const { createCategory } = require('./createcategory.controllers');
const { modifyCategory } = require('./modifycategory.controllers');
const { deleteCategory } = require('./deletecategory.controllers');

module.exports = {
    createCategory,
    modifyCategory,
    deleteCategory
};