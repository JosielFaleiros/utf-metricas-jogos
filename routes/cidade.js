var express = require('express')
var router = express.Router()

var models = require('../model')

router.get('/', async function(req, res) {
    console.log(req.query)
    cidades = await models.cidade.getAll()
    res.render('cidades', {
        cidades: cidades
    })
})

router.post('/new', async function(req, res) {
    novaCidade = await models.cidade.new(req.body)
    res.redirect('/cidade')
})

router.get('/new', function(req, res) {
    res.render('novaCidade')
})

module.exports = router
