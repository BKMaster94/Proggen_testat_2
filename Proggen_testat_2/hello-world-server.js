var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
	var path = url.parse(req.url).pathname;
	if(path == "/getstring")
	{
		console.log("request ist da");
	}
  	fs.readFile('HTML/Index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
    
  });
}).listen(8080);