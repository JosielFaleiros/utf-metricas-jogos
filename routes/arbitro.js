var express = require('express')
var router = express.Router()
var Arbitro = require('../model/arbitro')
var Cidade = require('../model/cidade')

router.get('/', async function(req, res) {
    arbitros = await Arbitro.find().populate('cidade').sort('nome').exec()
    cidades = await Cidade.find().sort('nome').exec()
    res.render('arbitros', {
        arbitros: arbitros,
        cidades: cidades
    })
})

router.post('/', async function(req, res) {
    novoArbitro = Arbitro(req.body)
    await novoArbitro.save()
    res.redirect('/arbitros')
})

module.exports = router
