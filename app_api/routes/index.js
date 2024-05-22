//This is the main API router which will contain imported controllers.

const express = require('express')  //Express app itself
const router = express.Router();    //Import router logic

//Import controllers that will be routed here.
const tripsController = require('../controllers/trips');
const newsController = require('../controllers/news');
const tipsController = require('../controllers/tips');
const mealsController = require('../controllers/meals');
const roomsController = require('../controllers/rooms');

//Define route for /trips endpoint.
router.route('/trips').get(tripsController.tripsList);   //This GET method routes tripsList
//Define route for /trips/:tripCode endpoint.
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode);  //This GET method routes tripsFindByCode

//Define route for /news endpoint.
router.route('/news').get(newsController.newsList);
//Define route for /news/:newsCode endpoint.
router.route('/news/:newsCode').get(newsController.newsFindByCode);

//Define route for /tips endpoint.
router.route('/tips').get(tipsController.tipsList);
//Define route for /tips/:tipsCode endpoint.
router.route('/tips/:tipsCode').get(tipsController.tipsFindByCode);

//Define route for /meals endpoint.
router.route('/meals').get(mealsController.mealsList);
//Define route for /meals/:mealsCode endpoint.
router.route('/meals/:mealsCode').get(mealsController.mealsFindByCode);

//Define route for /rooms endpoint.
router.route('/rooms').get(roomsController.roomsList);
//Define route for /rooms/:roomsCode endpoint.
router.route('/rooms/:roomsCode').get(roomsController.roomsFindByCode);



module.exports = router;