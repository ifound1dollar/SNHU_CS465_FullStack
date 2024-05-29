const mongoose = require('mongoose');
const Trip = require('../models/tripsModel');   //Register model
const Model = mongoose.model('trips');

//GET: /trips - lists all trips
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const tripsList = async(req, res) => {
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

//GET: /trips/:tripCode - lists a SINGLE trip
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const tripsFindByCode = async(req, res) => {
    const q = await Model.find({'code': req.params.tripCode}).exec();  //Filter with trip code in the request URI

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

//POST: /trips - Adds a new Trip
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const tripsAddTrip = async(req, res) => {
    const q = await Model.create({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    });

    //console.log(q);
}

//PUT: /trips/:tripCode - Updates an existing Trip
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const tripsUpdateTrip = async(req, res) => {
    const q = await Model.findOneAndUpdate(
        { 'code': req.params.tripCode },
        {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }
    ).exec();

    if (!q) {
        //If false, database returned no data.
        return res.status(400).json(err);
    } else {
        //Else return resulting updated Trip.
        return res.status(201).json(q);
    }
}

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
}