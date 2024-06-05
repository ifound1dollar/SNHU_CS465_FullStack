const mongoose = require('mongoose');
const Trip = require('../models/tripsModel');   //Register model
const Model = mongoose.model('trips');
const User = mongoose.model('users');

//Function to get a user.
const getUser = async (req, res, callback) => {
    if (req.auth && req.auth.email) {
        try {
            const user = await User.findOne({ email: req.auth.email }).exec();

            //If user not found, return status 404 with error message.
            if (!user) {
                return res.status(404).json({ message: 'User not found1' });
            }
            
            callback(req, res, user.name);
        } catch (err) {
            console.log(err);
            return res.status(404).json({ message: 'User not found2' });
        }
    }
};

//GET: /trips - lists all trips
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const tripsList = async (req, res) => {
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
const tripsFindByCode = async (req, res) => {
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
const tripsAddTrip = async (req, res) => {
    await getUser(req, res, (req, res) => {
        const q = Model.create({
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
    });
};

//PUT: /trips/:tripCode - Updates an existing Trip
//Regardless of outcome, response must include HTML status code and HTML message to the requesting client.
const tripsUpdateTrip = async (req, res) => {
    await getUser(req, res, (req, res) => {
        try {
            const q = Model.findOneAndUpdate(
                { code: req.params.tripCode },
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
                return res.status(400).json({ message: "Trip not found" });
            } else {
                //Else return resulting updated Trip.
                return res.status(201).json(q);
            }
        } catch (error) {
            console.error('Error updating trip: ', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
}