var http = require('http');
var express = require('express');
var app = express();

console.log('Trying to configure app server...');
console.log('process.env.OPENSHIFT_NODEJS_PORT'+process.env.OPENSHIFT_NODEJS_PORT);
console.log('process.env.OPENSHIFT_NODEJS_IP'+process.env.OPENSHIFT_NODEJS_IP);

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');

http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});