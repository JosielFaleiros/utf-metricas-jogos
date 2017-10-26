const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const Marko = require('express-marko')
const routes = require('./routes')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.use(Marko)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())


app.use('/', routes.cidade)


app.listen(8080)
