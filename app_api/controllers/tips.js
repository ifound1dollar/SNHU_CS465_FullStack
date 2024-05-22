const mongoose = require('mongoose');
const Tips = require('../models/tipsModel');   //Register model
const Model = mongoose.model('tips');

//GET: /tips - lists all tips
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const tipsList = async(req, res) => {
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

//GET: /tips/:tipCode - lists a SINGLE tip
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const tipsFindByCode = async(req, res) => {
    const q = await Model.find({'code': req.params.tipsCode}).exec();  //Filter using tip code in the request URI

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
    tipsList,
    tipsFindByCode
}