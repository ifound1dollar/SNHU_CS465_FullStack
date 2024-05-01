var express = require('express');
var router = express.Router();

//Reference to main controller
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);  //Use controller reference rather than hard-coding

module.exports = router;
