var http = require('http');
var fs = require('fs');
var path = require('path');

var mimeType = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.eot': 'appliaction/vnd.ms-fontobject',
  '.ttf': 'aplication/font-sfnt'
};

var server = http.createServer(function(req, res) {
	console.log(req.method, req.url);
	var url = path.parse(req.url);
	var filePath = path.join(process.cwd(), url.dir, url.base);
	var mime = mimeType[url.ext] ? mimeType[url.ext] : 'text/plain';
	console.log(url);
	console.log(filePath);

	fs.stat(filePath, function(err, stats) {
		if (err) {
			res.writeHead(404);
			return res.end('404');
		}
		
		if (stats.isDirectory()) {
			fs.readFile(filePath + '/index.html', function(err, data) {
				if (err) {
					res.writeHead(404);
					res.end();
				}
				res.writeHead(200, {
					'Content-Type': 'text/html'
				});
				res.write(data);
				res.end();
			});
		} else {
			fs.readFile(filePath, function(err, data) {
				if (err) {
					res.writeHead(404);
					res.end();
				}

				res.writeHead(200, {
					'Content-Type': mime
				});
				res.write(data);
				res.end();
			});
		}
	});

	
});

server.listen(8000, function() {
	console.log('server is listening on port 8000');
});






