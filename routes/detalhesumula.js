var express = require('express')
var router = express.Router()

var models = require('../model')

router.get('/:id', async function(req, res) {
    id = req.params['id']
    sumula = await models.sumula.byId(id)
    res.render('editarsumula', {
        sumula: sumula
    })
})

router.post('/', async function(req, res) {
    id = req.body.sumula
    sumula = await models.sumula.byId(id)
    await sumula.newDetalheSumula(req.body)
    res.redirect('/detalhesumula/' + id)
})

module.exports = router
