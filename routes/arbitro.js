var express = require('express')
var router = express.Router()

var models = require('../model')

router.get('/', async function(req, res) {
    let arbitros = await models.arbitro.getAll()
    let cidades = await models.cidade.getAll()
    res.render('arbitros', {
        arbitros: arbitros,
        cidades: cidades
    })
})

router.post('/', async function(req, res) {
    let novoArbitro = models.arbitro.new(req.body)
    res.redirect('/arbitro')
})

module.exports = router
