const express = require('express');
const router = express.Router();
const controller = require('../../BK-END/controllers/vehicle.controller');

module.exports = function () {
    router.post('/create', controller.createVehicle);
    router.get('/display', controller.GetAllVehicles);
    return router;
}
