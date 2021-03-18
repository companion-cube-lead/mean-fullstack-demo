
var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');


/* GET home page. */


// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// var homepageController = function (req, res) {
//   res.render('index', { title: 'Express' });
// //Take anonymous function and define it as a named function
// };

router.get('/', ctrlMain.index);



module.exports = router;
