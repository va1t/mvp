var express = require('express');
var app = express();
var path = require("path");

var routes = require('./routes/app')

app.use('/', routes);

//view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



app.listen(3000);

console.log('Running at Port 3000');