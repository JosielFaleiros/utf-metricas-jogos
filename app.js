const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const Marko = require('express-marko')
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect('mongodb://localhost/campeonato', {useMongoClient: true})

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.use(Marko)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())


app.use('/', routes.cidade)


app.listen(8080)
