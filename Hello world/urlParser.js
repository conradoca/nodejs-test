var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
var page = url.parse(req.url).pathname;
var params = querystring.parse(url.parse(req.url).query)
console.log(page);
res.writeHead(200, {"Content-Type": "text/plain"});
switch (page) {
  case '/':
    res.write('You\'re at the home page\n');
    break;
  case '/products':
    res.write('You\'re at the products page\n');
    break;
  default:
    res.writeHead(404);
    res.write('This is the error page\n');
}
if ('firstname' in params && 'lastname' in params){
  res.write('Your name is ' + params['firstname'] + ' and your surname is ' + params['lastname'] + '\n');
  }
else {
  res.write('Don\'t you have name and surname?\n');
  }
res.write('Well Hello');
res.end();
});
server.listen(8080);
