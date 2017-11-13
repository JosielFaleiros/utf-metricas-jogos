var express = require('express')
var router = express.Router()

var models = require('../model')

router.get('/', async function(req, res) {
    let times = await models.time.getAll()
    res.render('times', {
        times: times
    })
})

router.post('/', async function(req, res) {
    let novoTime = await models.time.new(req.body)
    res.redirect('/time')
})

router.get('/:id', async function(req, res) {
    let id = req.params['id']
    let time = await models.time.byId(id)
    let cidades = await models.cidade.getAll()
    res.render('jogadores', {
        time: time,
        cidades: cidades,
    })
})

module.exports = router
