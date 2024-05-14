//Bring in DB connection (from db.js) and Trip schema (from travlr.js).
const Mongoose = require('./db');
const Trip = require('./travlr');

//Read seed data from trips.json.
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

//Delete any existing data in collection, then insert seed data from above.
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

//Once seeding is complete, close MongoDB connection and exit.
seedDB().then(async () => {
    await Mongoose.connection.close();  //Calls event listener to gracefully shutdown and log
    process.exit(0);
})