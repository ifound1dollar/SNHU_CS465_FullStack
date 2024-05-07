var express = require('express');
var router = express.Router();

//Reference to about page controller
var controller = require('../controllers/about');

/* GET about page */
router.get('/', controller.about);

module.exports = router;