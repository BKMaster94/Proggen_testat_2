$("#target").click(function(){
	alert("clickd");
	$.ajax({
		url: "/test",
		type: "POST",
		data: "test",
		success: function(result){
			alert("success: " + result);
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