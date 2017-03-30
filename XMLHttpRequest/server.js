var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain',
		'Access-Control-Allow-Origin': 'http://localhost:8001'
	});
	res.end('okay');

	console.log(req.path);
});

server.listen(1337, function() {
	console.log('Server is listening on port 1337');
});