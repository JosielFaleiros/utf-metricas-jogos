var express = require('express')
var router = express.Router()
var Time = require('../model/time')

router.get('/', async function(req, res) {
    times = await Time.find().sort('-pontos').exec()
    res.render('times', {
        times: times
    })
})

router.post('/', async function(req, res) {
    novoTime = Time(req.body)
    await novoTime.save()
    res.redirect('/times')
})

module.exports = router
