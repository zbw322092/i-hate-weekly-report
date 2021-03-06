var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var port = process.argv[2] || 9000;
var createFile = require('./file.js');
var gitWeekReport = require('./gitWeekReport.js');

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

var server = http.createServer(function(req, res) {});

server.on('request', function(req, res) {
  if (req.method === 'GET') {
    var parsedUrl = url.parse(req.url);
    var filePath = path.join(process.cwd(), parsedUrl.pathname);
    var fileExt = path.parse(req.url).ext;
    var mime = mimeType[fileExt] || 'text/plain';

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

  } else if (req.method === 'POST' && req.url === '/submit/formdata') {
    console.log('headers: ', req.headers);
    console.log('url: ', req.url);
    
    var body = '';
    req.on('data', function(data) {
      body += data;
    });

    // Too much POST data, kill the connection
    if (body.length > 1e6) {
      req.connection.destory();
    }

    req.on('end', function() {
      var parsedBody = JSON.parse(body);
      console.log('Parsed Data: ', parsedBody);

      createFile(parsedBody, createFileCb);

      function createFileCb() {
        // handler file git
        gitWeekReport(gitFailedCb, gitSuccessCb);
      }

      function gitFailedCb(err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Push File FAILED');
      }

      function gitSuccessCb(result) {
        console.log('Push Done');
        res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
        res.end('Push File SUCCESSED');
      }
    });

  }

});


server.listen(parseInt(port, 10), function() {
    console.log(`server is listening on port ${parseInt(port, 10)}`);
});



















