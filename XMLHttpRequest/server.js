var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end('okay');

	console.log(req.path);
});

server.listen(1337, function() {
	console.log('Server is listening on port 1337');
});