var express = require('express');
var router = express.Router();

//Reference to news page controller
var controller = require('../controllers/news');

/* GET news page */
router.get('/', controller.news);

module.exports = router;