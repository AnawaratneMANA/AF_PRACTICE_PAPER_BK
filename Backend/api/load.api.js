const express = require('express');
const router = express.Router();
const controller = require('../controllers/load.controller');

module.exports = function () {
    router.post('/create', controller.createLoad);
    router.get('/get/:id', controller.getLoadsInEachVehicleType);
    router.get('/display', controller.GetAllLoads);
    router.get('/calculation', controller.CalculateLoadCharge);
    return router;
}
