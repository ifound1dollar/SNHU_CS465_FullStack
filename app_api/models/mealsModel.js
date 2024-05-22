const mongoose = require('mongoose');

//Define news schema.
const mealsSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    categoryName: { type: String, required: true, index: true },
    itemName: { type: String, required: true, index: true },
    image: { type: String },
    description: { type: String }
});
const Meals = mongoose.model('meals', mealsSchema);

//Export Trip from module.
module.exports = Meals;