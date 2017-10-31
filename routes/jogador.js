var express = require('express')
var router = express.Router()

var models = require('../model')

router.get('/:id', async function(req, res) {
    id = req.params['id']
    time = await models.time.byId(id)
    cidades = await models.cidade.getAll()
    res.render('jogadores', {
        time: time,
        cidades: cidades,
    })
})

router.post('/', async function(req, res) {
    id = req.body.time
    time = await models.time.byId(id)
    await time.newJogador(req.body)
    res.redirect('/jogador/' + id)
})

module.exports = router
