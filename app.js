const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const Marko = require('express-marko')
const routes = require('./routes')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/campeonato', {useMongoClient: true})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.use(Marko)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    next()
})

/*
Adicionando as rotas automaticamente.

https://stackoverflow.com/questions/8312459/iterate-through-object-properties#answer-40737306
*/
Object.keys(routes).map(e => app.use('/'+e, routes[e]))


app.listen(8080)
