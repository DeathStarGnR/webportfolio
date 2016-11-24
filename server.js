var express = require('express')
  , logger = require('morgan')
  , formidable = require('formidable')
  , app = express()
  , template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade');

app.use(logger('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res, next) {
  try {
    var html = template({ title: 'Home' });
    res.send(html);
  } catch (e) {
    next(e);
  }
})

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

//app.listen(process.env.PORT || 3000, function () {
//  console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
//})