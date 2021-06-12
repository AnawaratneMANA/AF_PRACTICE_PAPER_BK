const Category = require('../models/category.model');
const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;

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

module.exports = {
    createCategories,
    getVehiclesInCategory
}
