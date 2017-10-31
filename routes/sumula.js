var express = require('express')
var router = express.Router()

var models = require('../model')

router.get('/', async function(req, res) {
    let sumulas = await models.sumula.getAll()
    let arbitros = await models.arbitro.getAll()
    let times = await models.time.getAll()
    res.render('sumulas', {
        times: times,
        arbitros: arbitros,
        sumulas: sumulas
    })
})

router.post('/', function(req, res) {
    models.sumula.new(req.body)
    res.redirect('/sumula')
})

module.exports = router
