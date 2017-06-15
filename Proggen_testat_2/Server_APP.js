var express = require('express');
var appServer = express();
var server = appServer.listen(8081, function(){
	console.log("Server gestartet auf Port: 8081");	
});
var io = require('socket.io').listen(server);
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

// Hier fängt socket.io an

	io.on('connection', function(client){
		console.log('A user is Connectet');
		client.on('disconnect', function(){
			console.log("Client disconnected");
		});
		
	});

/////////////////////////


appServer.get('/', function(req,res){ // Url Abfangen
	res.sendFile(path.resolve('HTML/Anmeldung.html')); // Nimm die HTML Datei aus dem Ordner
});

appServer.get('/Json' , function(req,res){
	res.send(meinJSONObjekt);
});

appServer.use(bodyParser.urlencoded({ // brauchen wir für das parsen vom Post body block
			extended: true 
}));

appServer.get('/Ajax/testAuslagerung.js', function(req,res){ // URL Abfangen
	res.sendFile(path.resolve('Ajax/testAuslagerung.js')); // Lade die Javascript datei ein.
});

appServer.post('/JsonPlayerNameBekommen', function (req,res){ //der SpielerName wird durch ein JSON an den server geschickt
	abfangen = req.body; // Nehme das Object aus der Request und packe sie in eine Variable.
	console.log(abfangen); //In der Console sehen wir die variable, welche das Object enthält
	console.log("Request bekommen");
	res.status(200).json(req.body);//Der Status "Success" wird übergeben und ein json Obj wird zurückgeschickt
});

appServer.get('/SeiteWechseln', function (req,res){ // Die Momentane Seite soll gewaechselt werden
	res.sendFile(path.resolve('HTML/Index.html')); // Die Datei HTML/Index.html wird an den client geschickt
});

appServer.get('/get', function(req,res){ // Get Methode
	res.send(test); // Sende dem Client informationen
	console.log("Daten gesendet" + test);
});

//appServer.listen(8081, function(){ // Höre auf den Port 8081
//	console.log("Server Start on PORT 8081"); // Server console Ausgabe
//});