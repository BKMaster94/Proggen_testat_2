$("#target").click(function(){ // #Target == ID von HTML || .click == Auf click || Funktion in funktion
	//alert("clickd"); // Alert == Dialogfenster
	$.ajax({ // Jquery Ajax Funktion
		url: "/test", // geben die Url weiter
		type: "POST", // Mehtode auswählen
		data: "test", // Daten übersenden 
		success: function(result){ // Bei erfolg
			//alert("success: " + result); // Gebe ein dialogfenster aus mit dem text aus dem Success
		}
	})
});

$("#butt").click(function(){
	//alert("ziel");
	$.ajax({
		url: "/get",
		type: "GET",
		success: function(result){
			//alert("success: " + result);
			$("#ziel").html(result);
		}
	})
});

//$.confirm({ // Jquery Confirm methode für das Neustarten des Spiels
//	title:	 	'Neustart?',
//	content:	'Soll das Spiel Neugestartet werden?',
//	buttons: 	{
//		Ja:		function(){
//			window.location.href = "/";
//		},
//		Nein:	function(){
//			alert("Danke und auf Wiedersehen");
//			window.close();
//		}
//	}
//});








var $ziel = $('#testSpielerNameetc');

$("#AnmeldeButton").click(function(){ //Wenn der Button wird geklickt und die Funktion funktion wird ausgeführt
	//alert("JSON Objekt kommt"); 	
	$.ajax({
		type: 	"POST",
		url: 	"/JsonPlayerNameBekommen",
		dataType: "json",
		data: {"player": SpielernameInput.value},
		success: function(data){
			window.location.href = "/SeiteWechseln";
		}
	});
});



var socket = io();
var test;
socket.on('Gewonnen', function(gewinner){
 	//alert(gewinner);
	if(gewinner == 'Unentschieden'){
		$('#gewonnenn').append('Sieger: Unentschieden')
	}else{
	$('#gewonnenn').append('Sieger: Spieler '+gewinner)
	}
	test = confirm('Neustarten ?');
	
	if(test)
	{		
		window.location.href = "/";
	}
	if(!test)
	{
		window.location.href = "www.google.de"
	}

});














//Wenn diese Fielder clicked werden emmite ich zum server
// Vom Server kommt die der Call um das Feld mit dem im server festgelegten Zeichen zu markieren
$("#S1Z_Eins").click(function(){
//alert("S1Z_Eins");
socket.emit('S1Z_Eins');
socket.emit('WennGewonnen'); // Nach jedem Klicken wird ein emit gemacht!
});
	socket.on('S1Z_EinsEmiter', function(zeichen){
	//	alert("wieder beim Client");
		$('#S1Z_Eins').append(zeichen);
	});
	
$("#S1Z_Zwei").click(function(){
//	alert("S1Z_Zwei");
	socket.emit('S1Z_Zwei');
	socket.emit('WennGewonnen');
});

	socket.on('S1Z_ZweiEmiter', function(zeichen){
	//	alert("wieder beim Client");
		$('#S1Z_Zwei').append(zeichen);
		//alert("Text von S1Z2: " +$('#S1Z_Zwei').text());
	});

$("#S1Z_Drei").click(function(){
//	alert("S1Z_Drei");
	socket.emit('S1Z_Drei');
	socket.emit('WennGewonnen');
});

	socket.on('S1Z_DreiEmiter', function(zeichen){
	//	alert("wieder beim Client");
		$('#S1Z_Drei').append(zeichen);
	});
	
$("#S2Z_Eins").click(function(){
//	alert("S1Z_Eins");
	socket.emit('S2Z_Eins');
	socket.emit('WennGewonnen');
});

	socket.on('S2Z_EinsEmiter', function(zeichen){
	//	alert("wieder beim Client");
		$('#S2Z_Eins').append(zeichen);
	});
	
$("#S2Z_Zwei").click(function(){
//	alert("S1Z_Zwei");
	socket.emit('S2Z_Zwei');
	socket.emit('WennGewonnen');
});

	socket.on('S2Z_ZweiEmiter', function(zeichen){
	//	alert("wieder beim Client");
		$('#S2Z_Zwei').append(zeichen);
	});
	
$("#S2Z_Drei").click(function(){
//	alert("S1Z_Drei");
	socket.emit('S2Z_Drei');
	socket.emit('WennGewonnen');
});

	socket.on('S2Z_DreiEmiter', function(zeichen){
	//	alert("wieder beim Client");
		$('#S2Z_Drei').append(zeichen);
	});

$("#S3Z_Eins").click(function(){
//	alert("S1Z_Eins");
	socket.emit('S3Z_Eins');
	socket.emit('WennGewonnen');
});

	socket.on('S3Z_EinsEmiter', function(zeichen){
	//	alert("wieder beim Client");
		$('#S3Z_Eins').append(zeichen);
	});

$("#S3Z_Zwei").click(function(){
//	alert("S1Z_Zwei");
	socket.emit('S3Z_Zwei');
	socket.emit('WennGewonnen');
});

	socket.on('S3Z_ZweiEmiter', function(zeichen){
	//	alert("wieder beim Client");
		$('#S3Z_Zwei').append(zeichen);
	});

$("#S3Z_Drei").click(function(){
//	alert("S1Z_Drei");
	socket.emit('S3Z_Drei');
	socket.emit('WennGewonnen');
});

	socket.on('S3Z_DreiEmiter', function(zeichen){
	//	alert("wieder beim Client");
		$('#S3Z_Drei').append(zeichen);
	});






//$("#jsonClick").click(function(){
//	alert("JSON Objekt kommt");
//	$.ajax({
//		type: 	"GET",
//		url: 	"/Json",
//		success: function(data){
//				$ziel.append('<li>Spieler1: '+data.player1+' Spieler2: '+data.player2 +'</li>' );
//		}
//	});
//});


//if(window.location.href === '')


//$(document).ready(function(){
//		alert("wir sind am laden");
//		$.ajax({
//			type: "GET",
//			url:  "/Json",
//			success: function(data){
//				alert("hat geklappt diggaaaa");
//				$ziel.append('<li>Spieler1: '+data.player1+' Spieler2: '+data.player2 +'</li>' );
//			}
//		});
//});





