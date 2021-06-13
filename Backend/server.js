const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


//API Files
const vehicleAPI = require('./api/vehicle.api');
const loadAPI = require('./api/load.api');

//Configurations
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

//Connection variables
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
    useCreateIndex: true,
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
}, (err => {
    if(err){
        console.log("Db Error : " + err.message);
    }
}))

//Calling APIs
app.use('/vehicle', vehicleAPI());
app.use('/load', loadAPI());

//Connect to the Database.
app.listen(PORT, ()=> {
    console.log("Server is up and running " + {PORT});
})
