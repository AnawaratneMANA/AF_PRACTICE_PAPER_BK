const Category = require('../models/category.model');
const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;
const {Worker, isMainThread} = require('worker_threads');

const createCategories = async (req, res) => {
    if (req.body) {
        const category = new Category(req.body);
        category.save().then(
            data => {
                res.status(200).send(data);
            }
        ).catch(error => {
                res.status(500).send({error: error.message})
            }
        )
    }
}

//Method to get vehicles in each category.
const getVehiclesInCategory =async (req, res) => {
    if(req.params && req.params.id){
        const category = await Category.findById(req.params.id).populate('vehicles', 'name model code')
            .then(data =>{
                res.status(200).send({vehicles: data});
            });
    }

}

//Get All Categories
const GetAllCategories  = async(req, res) => {
    const category = await Category.find()
        .then(data => {res.status(200).send({categories: data});})
        .catch(error => {res.status(500).send({ categories: error});});
}

//Implementing the trip charge calculation service.
const CalculateTripCharge = async (req, res) => {

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

module.exports = {
    createCategories,
    getVehiclesInCategory,
    GetAllCategories,
    CalculateTripCharge
}
