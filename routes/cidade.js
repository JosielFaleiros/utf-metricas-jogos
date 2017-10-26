var express = require('express')
var router = express.Router()
var Cidade = require('../model/cidade')

router.get('/', async function(req, res) {
    cidades = await Cidade.find().sort('nome').exec()
    res.render('cidades', {
        cidades: cidades
    })
})

router.post('/', async function(req, res) {
    novaCidade = Cidade(req.body)
    await novaCidade.save()
    res.redirect('/cidades')
})

module.exports = router
