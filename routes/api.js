
var http = require('http');
var express = require('express');
var url = require('url');


var router = express.Router();
var bodyParser = require('body-parser');


var apiKey = '8dq9cz3zggzevwma8bc842za';


/* GET users listing. */
router.get('/', function(req, res, next) {
 	console.log('color is: ',req.query.searchTerms);

 	var searchTerms = req.query.searchTerms;
 	//searchTerms = JSON.stringify(searchTerms); 
  	var url = "http://api.walmartlabs.com/v1/search?query=bed&format=json&apiKey=8dq9cz3zggzevwma8bc842za";
  	var options = {
	  host: "api.walmartlabs.com",
	  port: 80,
	  path: '/v1/search?query=shoes+'+ searchTerms + '&format=json&apiKey=8dq9cz3zggzevwma8bc842za',
	  method: 'GET',
	  json: true
	};

	
	var temp = "";
  	

	http.request(options, function(response) {
	  console.log('STATUS: ' + response.statusCode);
	  console.log('HEADERS: ' + JSON.stringify(res.headers));
	  response.setEncoding('utf8');
	  response.on('data', function (data) {
	    //console.log('BODY: ' + data);
	    //console.log('BODY: ' + data);
	     temp += data;
	    
	  });
	  response.on('end', function () {
    	res.writeHead(200, {"Content-Type": "application/json"});
		res.end(temp);
    	//console.log(temp);
  	  });

	}).end();
	
});


module.exports = router;





