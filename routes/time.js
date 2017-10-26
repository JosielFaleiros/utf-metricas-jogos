var express = require('express')
var router = express.Router()
var Time = require('../model/time')

router.get('/', async function(req, res) {
    times = await Time.getAll()
    res.render('times', {
        times: times
    })
})

router.post('/new', async function(req, res) {
    novoTime = await Time.new(req.body)
    res.redirect('/time')
})

module.exports = router
