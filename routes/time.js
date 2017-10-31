var express = require('express')
var router = express.Router()

var models = require('../model')

router.get('/', async function(req, res) {
    times = await models.time.getAll()
    res.render('times', {
        times: times
    })
})

router.post('/', async function(req, res) {
    novoTime = await models.time.new(req.body)
    res.redirect('/time')
})

module.exports = router
