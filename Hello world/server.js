console.log("Starting app!");

var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200, {"Content-Type": "text/html"});
res.end('<!DOCTYPE html>'+
'<html>'+
' <head>'+
' <meta charset="utf-8" />'+
' <title>My Node.js page!</title>'+
' </head>'+
' <body>'+
' <p>Here is a paragraph of <strong>HTML</strong>!</p>'+
' </body>'+
'</html>');
});
server.listen(8080);
