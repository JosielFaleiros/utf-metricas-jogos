var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('index', {
        name: 'Santos',
        colors: ['blue', 'red', 'green']
    })
})


module.exports = router
