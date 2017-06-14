var express = require('express');
var appServer = express();
var fs= require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var test = "Server Daten";

var abfangen = "";

var meinJSONObjekt = require(path.resolve('JSON/spielerName.json'));
console.log(meinJSONObjekt);


/*fs.writeFile(path.resolve('JSON/spielerName.json'), JSON.stringify(playerName), (err) => { // Test zum erstellen von datein.
	  if (err) throw err;
	  console.log('The file has been saved!');
	});*/


appServer.get('/Json' , function(req,res){
	res.send(meinJSONObjekt);
});

appServer.get('/GetSpielerName', function(req,res){
	res.send(meinJSONObjekt);
});

appServer.get('/SeiteWechseln', function(req,res){
	res.sendFile(path.resolve('HTML/Index.html'));
});

appServer.use(bodyParser.urlencoded( // brauchen wir für das parsen vom Post body block
		{
			extended: true 
			}));


appServer.get('/', function(req,res){ // Url Abfangen
	res.sendFile(path.resolve('HTML/Anmeldung.html')); // Nimm die HTML Datei aus dem Ordner
});

appServer.get('/Ajax/testAuslagerung.js', function(req,res){ // URL Abfangen
	res.sendFile(path.resolve('Ajax/testAuslagerung.js')); // Lade die Javascript datei ein.
});

appServer.post('/test', function (req,res){ // Post methode.
	console.log(req.body);
	abfangen = req.body; // Nehme das Object aus der Request und packe sie in eine Variable.
	console.log(abfangen);
	console.log("Request bekommen");
	res.send("WUHU");
});

appServer.get('/get', function(req,res){ // Get Methode
	res.send(test); // Sende dem Client informationen
	console.log("Daten gesendet" + test);
});

appServer.listen(8081, function(){ // Höre auf den Port 8081
	console.log("Server Start on PORT 8081"); // Server console Ausgabe
});