const { createCategory } = require('./createcategory.controllers');
const { modifyCategory  } = require('./modifycategory.contollers');
const { deleteCategory } = require('./deletecategory.controllers');
const { getCategory } = require('./getcategory.controllers');

module.exports = {
    createCategory,
    modifyCategory,
    deleteCategory,
    getCategory
};