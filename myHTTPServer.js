//Lets require/import the HTTP module
var http = require('http');
var bodyParser = require('body-parser');
var money = 0;
var coins = 0;
var shareCoefficient = 1;

//Lets define a port we want to listen to
const PORT=9559;

var express = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/money/', function (req, res) {
  money = coins*shareCoefficient;
  res.send({value: money});

});

app.get('/stock/', function (req, res) {
  res.send({value: shareCoefficient});
});

app.post('/stock', function (req, res) {
  console.log("stock post", req.body);
  shareCoefficient = req.body.value;
  res.send({value: shareCoefficient});

});

app.get('/coin/', function (req, res) {
  res.send({value: coins});

});

app.post('/coin/', function (req, res) {
  coins = coins+1;
  res.send({value: coins});
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
