const Load = require('../models/load.model');
const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;
const {Worker} = require('worker_threads');

const createLoad = async (req, res) => {
    if (req.body) {
        const load = new Load(req.body);
        load.save().then(
            data => {
                res.status(200).send({load: data});
            }
        ).catch(error => {
                res.status(500).send({error: error.message})
            }
        )
    }
}

//Method to get vehicles in each category.
const getLoadsInEachVehicleType =async (req, res) => {
    if(req.params && req.params.id){
        // const category = await Category.findById(req.params.id).populate('vehicles', 'name model code')
        //     .then(data =>{
        //         res.status(200).send({vehicles: data});
        //     });
    }

}

//Get All Categories
const GetAllLoads  = async(req, res) => {
    const load = await Load.find()
        .then(data => {res.status(200).send({load: data});})
        .catch(error => {res.status(500).send({ load: error});});
}

//Implementing the trip charge calculation service.
const CalculateLoadCharge = async (req, res) => {
        console.log(req.body);
        const worker = new Worker("./calculations/chargeCalculationWorker.js", {workerData: {data:req.body}});
        worker.on('message',(data)=> {
            console.log("Work done" + data);
            res.send("Total amount :" + data);
        })

        worker.on('error',(data)=> {
            console.log("Work done error");
            console.log(data.message)
        })

        worker.on('exit',(data)=> {
            console.log("Work done exit");
            console.log(data.message)
        })
    worker.postMessage("File that get passed.");
}

//View vehicles in each category.
const vehiclesInEachCategory = async (req, res) =>{

}

module.exports = {
    createLoad,
    getLoadsInEachVehicleType,
    GetAllLoads,
    CalculateLoadCharge
}
