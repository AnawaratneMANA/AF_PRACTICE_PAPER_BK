const Vehicle = require('../models/vehicle.model');
const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;

const createVehicle = async (req, res) => {
    if (req.body) {
        const vehicle = new Vehicle(req.body);
        vehicle.save().then(
            data => {
                res.status(200).send(data);
            }
        ).catch(error => {
                res.status(500).send({error: error.message})
            }
        )
    }
}

//Get Vehicle details
const GetAllVehicles  = async(req, res) => {
    const vehicle = await Vehicle.find()
        .then(data => {res.status(200).send({vehicles: data});})
        .catch(error => {res.status(500).send({ vehicles: error});});
}

module.exports = {
    createVehicle,
    GetAllVehicles
}
