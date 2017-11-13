"use strict"

const fs = require("fs")
const path = require("path")

const basename  = path.basename(__filename)
// const config    = require(__dirname + '/../../config/config.js')['development']
// const sequelize = new Sequelize(config.database, config.username, config.password, config)

fs
.readdirSync(__dirname)
.filter(file => {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
})
.forEach(file => {
  var moduleName = file.split('.')[0]
  exports[moduleName] = require('./' + moduleName)
})
