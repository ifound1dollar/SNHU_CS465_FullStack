var express = require('express');
var router = express.Router();

//Reference to meals page controller
var controller = require('../controllers/meals');

/* GET meals page */
router.get('/', controller.meals);

module.exports = router;