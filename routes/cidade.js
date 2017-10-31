var express = require('express')
var router = express.Router()

var models = require('../model')

router.get('/', async function(req, res) {
    cidades = await models.cidade.getAll()
    res.render('cidades', {
        cidades: cidades
    })
})

router.post('/', async function(req, res) {
    novaCidade = await models.cidade.new(req.body)
    res.redirect('/cidade')
})

module.exports = router
