
// var express = require('express');
// var router = express.Router();

// var searchTerms = "";
// var api = "http://api.walmartlabs.com/v1/search?query=" + searchTerms + "&format=json&apiKey=8dq9cz3zggzevwma8bc842za";

// router.get('/api' , function(req, res){
//   // var searchTerms = "hat";
//   console.log('hello');


// });





var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  	res.send('api');
});

module.exports = router;