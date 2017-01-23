var PORT = 8000 || process.env.port;
var DB = "mongodb://localhost.angulartwo";
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
});
mongoose.connect(DB, function(err){
  if(err){
    return err;
  } else {
    console.log('Successfully connected to ' + DB);
  }
});
app.set('views', __dirname + '/client/views');
