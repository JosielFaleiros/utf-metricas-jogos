var express = require('express')
var router = express.Router()
var Arbitro = require('../model/arbitro')
var Cidade = require('../model/cidade')

router.get('/', async function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    arbitros = await Arbitro.getAll()
    cidades = await Cidade.getAll()
    res.render('arbitros', {
        arbitros: arbitros,
        cidades: cidades
    })
})

router.post('/new', async function(req, res) {
    novoArbitro = Arbitro.new(req.body)
    res.redirect('/arbitro')
})

module.exports = router
