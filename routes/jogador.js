var express = require('express')
var router = express.Router()
var Time = require('../model/time')
var Cidade = require('../model/cidade')
var Jogador = require('../model/jogador')

router.get('/:id', async function(req, res) {
    id = req.params['id']
    time = await Time.byId(id)
    cidades = await Cidade.getAll()
    res.render('jogadores', {
        time: time,
        cidades: cidades,
    })
})

router.post('/new', async function(req, res) {
    id = req.body.time
    time = await Time.byId(id)
    await time.newJogador(req.body)    
    res.redirect('/jogador/' + id)
})

module.exports = router
