//Lets require/import the HTTP module
var http = require('http');
var bodyParser = require('body-parser');
var cors = require('cors');
var money = 0;
var coins = 0;
var shareCoefficient = 1;
var company = "fb";

//Lets define a port we want to listen to
const PORT=9559;

var express = require('express');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/money', function (req, res) {
  money = coins*shareCoefficient;
  res.send({value: money});
});

app.post('/company', function (req, res) {
  company = req.body.company;
  res.send("OK");
});

app.get('/stock', function (req, res) {
  res.send({value: coins, coeficient: shareCoefficient, selectedCompany: company});
});

app.post('/stock', function (req, res) {
  console.log("stock post", req.body);
  shareCoefficient = req.body.value;
  res.send({value: shareCoefficient});

});

app.get('/coin', function (req, res) {
  res.send({value: coins});
});

app.post('/coin', function (req, res) {
  coins = coins+1;
  console.log('coin added ', coins);
  res.send({value: coins, coeficient: shareCoefficient, selectedCompany: company});

  // notify GCM message
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
