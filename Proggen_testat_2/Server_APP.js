var express = require('express');
var appServer = express();
var bodyParser = require('body-parser')
var path = require('path');
var test = "Server Daten";

var abfangen = "";

appServer.use(bodyParser.urlencoded(
		{
			extended: true 
			}));





appServer.get('/', function(req,res){
	res.sendFile(path.resolve('HTML/test.html'));
});

appServer.get('/Ajax/testAuslagerung.js', function(req,res){
	res.sendFile(path.resolve('Ajax/testAuslagerung.js'));
});



appServer.post('/test', function (req,res){
	console.log(req.body);
	abfangen = req.body;
	console.log(abfangen);
	console.log("Request bekommen");
	
	res.send("WUHU");
	
});

appServer.get('/get', function(req,res){
	res.send(test);
	console.log("Daten gesendet" + test);
});



appServer.listen(8081, function(){
	console.log("Server Start on PORT 8081");
});