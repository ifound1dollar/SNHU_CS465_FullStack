const mongoose = require('mongoose');
const Meals = require('../models/mealsModel');   //Register model
const Model = mongoose.model('meals');

//GET: /meals - lists all meals
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const mealsList = async(req, res) => {
    const q = await Model.find({}).exec();  //No filter, so returns all records

    //UNCOMMENT BELOW TO LOG RESULTS OF QUERY
    //console.log(q);

    if (!q) {
        //If false, database returned no data.
        return res.status(404).json(err);
    } else {
        //Else return resulting trip list (code 200).
        return res.status(200).json(q);
    }
};

//GET: /meals/:mealsCode - lists a SINGLE meal
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const mealsFindByCode = async(req, res) => {
    const q = await Model.find({'code': req.params.mealsCode}).exec();  //Filter with meal code in the request URI

    //UNCOMMENT BELOW TO LOG RESULTS OF QUERY
    //console.log(q);

    if (!q) {
        //If false, database returned no data.
        return res.status(404).json(err);
    } else {
        //Else return resulting trip list (code 200).
        return res.status(200).json(q);
    }
};

module.exports = {
    mealsList,
    mealsFindByCode
}