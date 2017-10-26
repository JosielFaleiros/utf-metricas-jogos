var express = require('express')
var router = express.Router()
var Time = require('../model/time')
var Cidade = require('../model/cidade')
var Jogador = require('../model/jogador')

router.get('/:id', async function(req, res) {
    id = req.params['id']
    time = await Time.byId(id)
    cidades = await Cidade.getAll()
    jogadores = await Jogador.byIdTime(id)
    res.render('jogadores', {
        time: time,
        cidades: cidades,
        jogadores: jogadores
    })
})

router.post('/new', async function(req, res) {
    id = req.body.time
    jogador = await Jogador.new(req.body)
    res.redirect('/jogador/' + id)
})

module.exports = router
