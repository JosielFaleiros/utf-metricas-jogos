var express = require('express')
var router = express.Router()

var models = require('../model')

router.get('/', async function(req, res) {
    arbitros = await models.arbitro.getAll()
    cidades = await models.cidade.getAll()
    res.render('arbitros', {
        arbitros: arbitros,
        cidades: cidades
    })
})

router.post('/', async function(req, res) {
    novoArbitro = models.arbitro.new(req.body)
    res.redirect('/arbitro')
})

module.exports = router
