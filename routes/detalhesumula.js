var express = require('express')
var router = express.Router()

var models = require('../model')

router.get('/:id', async function(req, res) {
    let id = req.params['id']
    let sumula = await models.sumula.byId(id)
    res.render('detalhesumula', {
        sumula: sumula
    })
})

router.post('/', async function(req, res) {
    let id = req.body.sumula
    let sumula = await models.sumula.byId(id)
    await sumula.newDetalheSumula(req.body)
    res.redirect('/detalhesumula/' + id)
})

module.exports = router
