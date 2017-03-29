var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var port = process.argv[2] || 9000;

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

    var parsedUrl = url.parse(req.url);
    var filePath = path.join(process.cwd(), parsedUrl.pathname);
    var fileExt = path.parse(req.url).ext;
    var mime = mimeType[fileExt] || 'text/plain';
    console.log(parsedUrl);
    console.log(filePath);


    fs.stat(filePath, function(err, stats) {
        if (err) {
            res.statusCode = 404;
            res.end(`File ${filePath} not found`);
            return;
        }

        if (stats.isDirectory()) {
            filePath += '/index.html';
        }

        fs.readFile(filePath, function(err, data) {
            if (err) {
                res.statusCode = 500;
                res.end(`Error getting the file: ${err}`);
            } else {
                res.writeHead(200, {
                    'Content-Type': mime
                });
                res.write(data);
                res.end();
            }
        });
    });
});



server.listen(parseInt(port, 10), function() {
    console.log(`server is listening on port ${parseInt(port, 10)}`);
});
