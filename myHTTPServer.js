//Lets require/import the HTTP module
var http = require('http');
var showMeTheMoney =100;
var dispatcher = require('httpdispatcher');

//Lets define a port we want to listen to
const PORT=9559;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');

});

app.get('/stock/', function (req, res) {
  res.send('Your stock value:'+showMeTheMoney);

});
app.get('/setstock/:value', function (req, res) {
  showMeTheMoney = req.params.value;

  res.send('Your new stock value:'+showMeTheMoney);

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});