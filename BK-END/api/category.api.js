const express = require('express');
const router = express.Router();
const controller = require('../../BK-END/controllers/category.controller');

module.exports = function () {
    router.post('/create', controller.createCategories);
    router.get('/get/:id', controller.getVehiclesInCategory);
    return router;
}
