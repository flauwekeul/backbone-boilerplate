var express = require('express');
var path = require('path');
var app = express();

//app.use(compression());
app.use(express.static(path.join(__dirname + '/../www')));

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('App listening at port http://%s:%s', host, port)
});
