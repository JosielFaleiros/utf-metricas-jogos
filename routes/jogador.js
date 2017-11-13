var express = require('express')
var router = express.Router()

var models = require('../model')

router.post('/', async function(req, res) {
    let id = req.body.time
    let time = await models.time.byId(id)
    await time.newJogador(req.body)
    res.redirect('/jogador/' + id)
})

module.exports = router
