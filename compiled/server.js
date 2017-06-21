'use strict';

var express = require('express');
var app = express();
var path = require("path");

//required from default view?
// require('node-jsx').install();

app.use(express.static(path.join(__dirname, '/compiled')));

// app.set('view engine', 'html');
// app.engine('html', engines.mustache);

//view engine setup
// app.set('views', __dirname + '/views');
// app.set('view engine', 'jsx');

// var options = { 
//     doctype: '<!DOCTYPE html>',
//     beautify: true
// };

// app.engine('jsx', require('express-react-views').createEngine(options));

app.get('');

app.listen(3000);

console.log('Running at Port 3000');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInBhdGgiLCJ1c2UiLCJzdGF0aWMiLCJqb2luIiwiX19kaXJuYW1lIiwiZ2V0IiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVQyxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQUlDLE1BQU1GLFNBQVY7QUFDQSxJQUFJRyxPQUFPRixRQUFRLE1BQVIsQ0FBWDs7QUFFQTtBQUNBOztBQUVBQyxJQUFJRSxHQUFKLENBQVFKLFFBQVFLLE1BQVIsQ0FBZUYsS0FBS0csSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFdBQXJCLENBQWYsQ0FBUjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQUwsSUFBSU0sR0FBSixDQUFRLEVBQVI7O0FBRUFOLElBQUlPLE1BQUosQ0FBVyxJQUFYOztBQUVBQyxRQUFRQyxHQUFSLENBQVksc0JBQVoiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgYXBwID0gZXhwcmVzcygpO1xudmFyIHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcblxuLy9yZXF1aXJlZCBmcm9tIGRlZmF1bHQgdmlldz9cbi8vIHJlcXVpcmUoJ25vZGUtanN4JykuaW5zdGFsbCgpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcvY29tcGlsZWQnKSkpO1xuXG4vLyBhcHAuc2V0KCd2aWV3IGVuZ2luZScsICdodG1sJyk7XG4vLyBhcHAuZW5naW5lKCdodG1sJywgZW5naW5lcy5tdXN0YWNoZSk7XG5cbi8vdmlldyBlbmdpbmUgc2V0dXBcbi8vIGFwcC5zZXQoJ3ZpZXdzJywgX19kaXJuYW1lICsgJy92aWV3cycpO1xuLy8gYXBwLnNldCgndmlldyBlbmdpbmUnLCAnanN4Jyk7XG5cbi8vIHZhciBvcHRpb25zID0geyBcbi8vICAgICBkb2N0eXBlOiAnPCFET0NUWVBFIGh0bWw+Jyxcbi8vICAgICBiZWF1dGlmeTogdHJ1ZVxuLy8gfTtcblxuLy8gYXBwLmVuZ2luZSgnanN4JywgcmVxdWlyZSgnZXhwcmVzcy1yZWFjdC12aWV3cycpLmNyZWF0ZUVuZ2luZShvcHRpb25zKSk7XG5cbmFwcC5nZXQoJycpXG5cbmFwcC5saXN0ZW4oMzAwMCk7XG5cbmNvbnNvbGUubG9nKCdSdW5uaW5nIGF0IFBvcnQgMzAwMCcpOyJdfQ==