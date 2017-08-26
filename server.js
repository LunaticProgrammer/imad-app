var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/hash/:input', function(req, res){
   var hashedString = hash(req.params.input, 'this-is-a-random-string') ;
   res.send(hashedString);
    
});

function hash(input){
    
    var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return ['pbkd2',hashed.toString(hex)];
}
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  
  $('.projects').hide();
  
  $('.projects-button').on('click', function() {
//$(this).next().toggle();
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
    $(this).next().slideToggle(400);
	});
  
}

$(document).ready(main);


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
