var express = require('express');
var app = express();
var path = require("path");

var routes = require('./routes/app')

//required from default view?
require('node-jsx').install();

app.use('/', routes);
app.use(express.static(path.join(__dirname)));

//view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

var options = { 
    doctype: '<!DOCTYPE html>',
    beautify: true
};

app.engine('jsx', require('express-react-views').createEngine(options));



app.listen(3000);

console.log('Running at Port 3000');