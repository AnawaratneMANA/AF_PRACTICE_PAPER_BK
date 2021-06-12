const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    vehicles: [{type: mongoose.Schema.Types.ObjectId, required: false, ref:'vehicle'}],

});

const Category = mongoose.model('category', CategorySchema);
module.exports = Category;
