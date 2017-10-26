var express = require('express')
var router = express.Router()
var Time = require('../model/time')

router.get('/', async function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')    
    times = await Time.getAll()
    res.render('times', {
        times: times
    })
})

router.post('/new', async function(req, res) {
    novoTime = await Time.new(req.body)
    res.redirect('/time')
})

router.get('/:id', async function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')    
    id = req.param('id')
    time = await Time.byId(id)
    console.log(time.nome)
    res.redirect('/time')
})

module.exports = router
