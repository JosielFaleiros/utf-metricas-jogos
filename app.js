require('marko/node-require'); // Allow Node.js to require and load `.marko` files

var express = require('express');
var markoExpress = require('marko/express');
var template = require('./view/index');

var app = express();

app.use(markoExpress()); //enable res.marko(template, data)

app.get('/', function(req, res) {
    res.marko(template, {
        name: 'Faleiros'
    });
});

app.listen(8080);
