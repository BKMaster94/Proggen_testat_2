var express = require('express');
var appServer = express();
var bodyParser = require('body-parser')
var path = require('path');


appServer.use(bodyParser.urlencoded(
		{
			extended: true 
			}));

appServer.get('/', function(req,res){
	res.sendFile(path.resolve('HTML/test.html'));
});

appServer.post('/test', function (req,res){
	
	console.log("Request bekommen");
	res.send("WUHU");
	
});



appServer.listen(8081, function(){
	console.log("Server Start on PORT 8081");
});