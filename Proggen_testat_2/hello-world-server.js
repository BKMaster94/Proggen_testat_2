var http = require('http');
var fs = require('fs');
var url = require('url');
var test = "Hallo Response";
http.createServer(function (req, res) {
	var path = url.parse(req.url).pathname;
	console.log(path);

	if(path === "/getstring")
	{
		console.log("request ist da");
	}
	
		if(path === "/getResponse")
	{		
		res.write(test);
		console.log("bekomme anfrage: " + test);
		res.end();
	}
	if(path === "/"){
  	fs.readFile('HTML/Index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
    
  });
  }
}).listen(8080);

console.log("Server Start");