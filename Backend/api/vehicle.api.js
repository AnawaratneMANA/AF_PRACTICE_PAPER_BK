const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehicle.controller');

module.exports = function () {
    router.post('/create', controller.createVehicle);
    router.get('/display', controller.GetAllVehicles);
    router.delete('/delete/:id',controller.DeleteVehicles);
    return router;
}
