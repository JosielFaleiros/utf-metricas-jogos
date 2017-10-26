var express = require('express')
var router = express.Router()
var Cidade = require('../model/cidade')

router.get('/', async function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    cidades = await Cidade.getAll()
    res.render('cidades', {
        cidades: cidades
    })
})

router.post('/new', async function(req, res) {
    novaCidade = await Cidade.new(req.body)
    res.redirect('/cidade')
})

module.exports = router
