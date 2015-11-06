//Lets require/import the HTTP module
var http = require('http');
var bodyParser = require('body-parser');
var showMeTheMoney =100;

//Lets define a port we want to listen to
const PORT=9559;

var express = require('express');
var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');

});

app.get('/stock/', function (req, res) {
  res.send('Your stock value:'+showMeTheMoney);

});
app.post('/stock/', function (req, res) {
  showMeTheMoney = req.body.value;
  res.send('Your new stock value:'+showMeTheMoney);

});

app.get('/coin/', function (req, res) {
  res.send({value: showMeTheMoney});

});

app.post('/coin/', function (req, res) {
  showMeTheMoney = showMeTheMoney+1;
  res.send('Your new stock value:'+showMeTheMoney);
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});