var readytestvar = 0;

$("#target").click(function(){ // #Target == ID von HTML || .click == Auf click || Funktion in funktion
	alert("clickd"); // Alert == Dialogfenster
	$.ajax({ // Jquery Ajax Funktion
		url: "/test", // geben die Url weiter
		type: "POST", // Mehtode auswählen
		data: "test", // Daten übersenden 
		success: function(result){ // Bei erfolg
			alert("success: " + result); // Gebe ein dialogfenster aus mit dem text aus dem Success
		}
	})
});

$("#butt").click(function(){
	alert("ziel");
	$.ajax({
		url: "/get",
		type: "GET",
		success: function(result){
			alert("success: " + result);
			$("#ziel").html(result);
		}
	})
});

var $ziel = $('#testSpielerNameetc');


$("#jsonClick").click(function(){
	alert("JSON Objekt kommt");
	$.ajax({
		type: 	"GET",
		url: 	"/Json",
		success: function(data){
				$ziel.append('<li>Spieler1: '+data.player1+' Spieler2: '+data.player2 +'</li>' );
		}
	});
});

$("#AnmeldeButton").click(function(){
	alert("JSON Objekt kommt");	
	$.ajax({
		type: 	"GET",
		url: 	"/GetSpielerName",
		success: function(data){
			alert("succsess1");
			window.location = "/SeiteWechseln";
		}
	});
});

$("#testSpielerNameetc").click(function(){
	alert("wir sind am laden");
	$.ajax({
		type: "GET",
		url:  "/Json",
		success: function(data){
			alert("hat geklappt diggaaaa");
			$ziel.append('<li>Spieler1: '+data.player1+' Spieler2: '+data.player2 +'</li>' );
		}
	});
});

$(document).ready(function(){
	if(readytestvar === 0){
		readytestvar++;
		alert("wir sind am laden");
		$.ajax({
			type: "GET",
			url:  "/Json",
			success: function(data){
				alert("hat geklappt diggaaaa");
				$ziel.append('<li>Spieler1: '+data.player1+' Spieler2: '+data.player2 +'</li>' );
			}
		});
	}else{
		console.log("ready geladen");
	}
});