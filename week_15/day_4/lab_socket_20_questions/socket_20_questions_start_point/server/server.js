var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function (req, res) {
  res.send("Server running");
});

app.use(express.static('client/build'));

var server = http.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
