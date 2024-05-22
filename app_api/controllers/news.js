const mongoose = require('mongoose');
const News = require('../models/newsModel');   //Register model
const Model = mongoose.model('news');

//GET: /news - lists all trips
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const newsList = async(req, res) => {
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

//GET: /news/:newsCode - lists a SINGLE trip
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const newsFindByCode = async(req, res) => {
    const q = await Model.find({'code': req.params.newsCode}).exec();  //Filter with trip code in the request URI

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
    newsList,
    newsFindByCode
}