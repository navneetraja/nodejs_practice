var http = require('http');      // import required modules
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {   //creating server
  var q = url.parse(req.url, true);
  console.log("Q"+ q);
  var filename = "." + q.pathname;
  console.log('fileName: '+filename);
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080); 

console.log("server running on port:8080");