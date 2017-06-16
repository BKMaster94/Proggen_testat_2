// Hier werden die Variablen initalisiert
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
var clientCount = 0;
var usernameForGame1 = "empty";

var spieler1= "";
var spieler2= "";

var zeichenXY = "";//Das Zeichen "X" oder "Y" im normalfall
var zuege = 0;//anzahl der schon gemachten Zuege

/*fs.writeFile(path.resolve('JSON/spielerName.json'), JSON.stringify(playerName), (err) => { // Test zum erstellen von datein.
	  if (err) throw err;
	  console.log('The file has been saved!');
	});*/

// Hier ist der Body-Parser

appServer.use(bodyParser.urlencoded({ // brauchen wir für das parsen vom Post body block
	extended: true 
}));

// Ende Body-Parser


// Hier fängt socket.io an

	io.on('connection', function(client){
		client.on('username', function() {
			client.username = usernameForGame1;
			
			clientCount++;
			if(clientCount <= 2 ){
				client.join('SpielRaum');
				//console.log("Client: " + client.username + " ist nun im SpieleRaum");
				if (clientCount === 1){
					spieler1 = client.username;
					client.id = 0; //ADI   Die Id des ersten clients wird auf 0 gesetzt
					console.log (spieler1);
				}
				if(clientCount === 2){
					spieler2 = client.username;
					client.id=1;//ADI   Die Id des ersten clients wird auf 1 gesetzt
					console.log(spieler2);
					io.to('SpielRaum').emit('SpielerName1', spieler1);
					io.to('SpielRaum').emit('SpielerName2', spieler2);
				}
				io.to('SpielRaum').emit('gameReady', clientCount);

			}
			
			console.log('A user is Connectet: ' + client.username + " | ID: " + client.id);
			client.emit('message', 'You are Connected');
			client.on('disconnect', function(){
				clientCount--;
				console.log("Client disconnected: " + client.username + " | ID: " + client.id);
				console.log("Momentane user: " + clientCount);
			});
			console.log("Momentane user: " + clientCount);
	    });
		

		//Wurde Geklicked und nun wird ein Zeichen zum client gescchickt
		// VIELE ABFRAGEN jedes Feld hat seine eigene abfrage
		client.on('S1Z_Eins', function(){//Es wurde das Feld .. clicked
			
		if(client.id === zuege%2){ //ADI  wenn die id des Spielers gleich der zuege modulo 2 ist... somit immer abwechselnd
//			console.log("S1Z_Eins im server angekommen");
			io.emit('S1Z_EinsEmiter', zeichenXY);
			if(zuege%2===0){
				zeichenXY = "X";
			}
			else{
				zeichenXY = "O";
			}
			zuege++;
		}
		});
		client.on('S1Z_Zwei', function(){//Es wurde das Feld .. clicked

		if(client.id === zuege%2){
//			console.log("S1Z_Zwei im server angekommen");
			io.emit('S1Z_ZweiEmiter', zeichenXY);
			if(zuege%2===0){
				zeichenXY = "X";
			}
			else{
				zeichenXY = "O";
			}
			zuege++;
		}
		});
		client.on('S1Z_Drei', function(){//Es wurde das Feld .. clicked

		if(client.id === zuege%2){
//			console.log("S1Z_Drei im server angekommen");
			io.emit('S1Z_DreiEmiter', zeichenXY);
			if(zuege%2===0){
				zeichenXY = "X";
			}
			else{
				zeichenXY = "O";
			}
			zuege++;
		}
		});
		client.on('S2Z_Eins', function(){//Es wurde das Feld .. clicked

		if(client.id === zuege%2){
//			console.log("S2Z_Eins im server angekommen");
			io.emit('S2Z_EinsEmiter', zeichenXY);
			if(zuege%2===0){
				zeichenXY = "X";
			}
			else{
				zeichenXY = "O";
			}
			zuege++;
		}
		});
		client.on('S2Z_Zwei', function(){//Es wurde das Feld .. clicked

		if(client.id === zuege%2){
//			console.log("S2Z_Zwei im server angekommen");
			io.emit('S2Z_ZweiEmiter', zeichenXY);
			if(zuege%2===0){
				zeichenXY = "X";
			}
			else{
				zeichenXY = "O";
			}
			zuege++;
		}
		});
		client.on('S2Z_Drei', function(){//Es wurde das Feld .. clicked

		if(client.id === zuege%2){
//			console.log("S2Z_Drei im server angekommen");
			io.emit('S2Z_DreiEmiter', zeichenXY);
			if(zuege%2===0){
				zeichenXY = "X";
			}
			else{
				zeichenXY = "O";
			}
			zuege++;
		}
		});
		client.on('S3Z_Eins', function(){//Es wurde das Feld .. clicked

		if(client.id === zuege%2){
//			console.log("S3Z_Eins im server angekommen");
			io.emit('S3Z_EinsEmiter', zeichenXY);
			if(zuege%2===0){
				zeichenXY = "X";
			}
			else{
				zeichenXY = "O";
			}
			zuege++;
		}
		});
		client.on('S3Z_Zwei', function(){//Es wurde das Feld .. clicked

		if(client.id === zuege%2){
//			console.log("S3Z_Zwei im server angekommen");
			io.emit('S3Z_ZweiEmiter', zeichenXY);
			if(zuege%2===0){
				zeichenXY = "X";
			}
			else{
				zeichenXY = "O";
			}
			zuege++;
		}
		});
		client.on('S3Z_Drei', function(){//Es wurde das Feld .. clicked

		if(client.id === zuege%2){
//			console.log("S3Z_Drei im server angekommen");
			io.emit('S3Z_DreiEmiter', zeichenXY);
			if(zuege%2===0){
				zeichenXY = "X";
			}
			else{
				zeichenXY = "O";
			}
			zuege++;
		}
		});
	});
// Hier endet Socket.io

appServer.get('/', function(req,res){ // Url Abfangen
	res.sendFile(path.resolve('HTML/Anmeldung.html')); // Nimm die HTML Datei aus dem Ordner
});


appServer.get ('/loadGame', function(req,res){
	res.sendFile(path.resolve('HTML/test.html'));
});

appServer.get('/Json' , function(req,res){
	res.send(meinJSONObjekt);
});


appServer.get('/Ajax/testAuslagerung.js', function(req,res){ // URL Abfangen
	res.sendFile(path.resolve('Ajax/testAuslagerung.js')); // Lade die Javascript datei ein.
});

appServer.get('/CSS/StyleIndex.css', function(req,res){ // URL Abfangen
	res.sendFile(path.resolve('CSS/StyleIndex.css')); // Lade die CSS datei ein.
});

appServer.post('/JsonPlayerNameBekommen', function (req,res){ //der SpielerName wird durch ein JSON an den server geschickt
	abfangen = req.body; // Nehme das Object aus der Request und packe sie in eine Variable.
	console.log(abfangen); //In der Console sehen wir die variable, welche das Object enthält
	console.log("Request bekommen");
	res.status(200).json(abfangen);//Der Status "Success" wird übergeben und ein json Obj wird zurückgeschickt
	usernameForGame1 = abfangen.player;
	console.log(usernameForGame1);
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