const mongoose = require('mongoose');
const Meals = require('../models/roomsModel');   //Register model
const Model = mongoose.model('rooms');

//GET: /rooms - lists all rooms
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const roomsList = async(req, res) => {
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

//GET: /rooms/:roomsCode - lists a SINGLE room
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const roomsFindByCode = async(req, res) => {
    const q = await Model.find({'code': req.params.roomsCode}).exec();  //Filter with meal code in the request URI

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
    roomsList,
    roomsFindByCode
}