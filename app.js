require('marko/node-require'); // Allow Node.js to require and load `.marko` files

var express = require('express');
var markoExpress = require('marko/express');
var indexlay = require('./view/index');
var mongoose = require('mongoose');

var app = express();

app.use(markoExpress()); //enable res.marko(template, data)

app.get('/', function(req, res) {
    res.marko(indexlay, {
        name: 'Santos',
        colors: ['blue', 'red', 'green']
    });
});

mongoose.connect('mongodb://localhost/campeonato', {useMongoClient: true});

app.listen(8080);
