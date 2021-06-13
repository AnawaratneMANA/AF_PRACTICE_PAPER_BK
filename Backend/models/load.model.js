const mongoose = require('mongoose');

const LoadSchema = new mongoose.Schema({
    code: {type: String, required: true, trim: true},
    name: {type: String, required: true, trim: true},
    load: {type: Number, required: true, trim: true},
    ampkm: {type: Number, required: true},
    vehicles: [{type: mongoose.Schema.Types.ObjectId, required: false, ref:'vehicle'}],

});

const Load = mongoose.model('load', LoadSchema);
module.exports = Load;
