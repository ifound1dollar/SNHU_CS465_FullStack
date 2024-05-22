//Bring in DB connection (from db.js) and various schema (ex. from travlr.js).
const Mongoose = require('./db');
const Trip = require('./tripsModel');
const News = require('./newsModel');
const Tips = require('./tipsModel');
const Meals = require('./mealsModel');
const Rooms = require('./roomsModel');

//Read seed data from trips.json.
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
var news = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));
var tips = JSON.parse(fs.readFileSync('./data/tips.json', 'utf8'));
var meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));
var rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

//Delete any existing data in collection(s), then insert seed data from above.
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);

    await News.deleteMany({});
    await News.insertMany(news);

    await Tips.deleteMany({});
    await Tips.insertMany(tips);

    await Meals.deleteMany({});
    await Meals.insertMany(meals);

    await Rooms.deleteMany({});
    await Rooms.insertMany(rooms);
};

//Once seeding is complete, close MongoDB connection and exit.
seedDB().then(async () => {
    await Mongoose.connection.close();  //Calls event listener to gracefully shutdown and log
    process.exit(0);
})